import { db } from './api.js';
import { push, serverTimestamp, set, ref} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const allSections = document.querySelectorAll('section');
const errorContainer = document.querySelector('#errorContainer');


/****************************************
 Bygger gränssnitt för meddelandevisning
*****************************************/

export function displayMessage(messages) {
  //Petra kolla koden här o rensa
  const messageObj = messages.Messages;
  // const messageObj2 = messages;
 
  const messagesSection = document.querySelector('.messages'); 
  messagesSection.innerHTML = '';
  
  let formattedTime = '';

  /********* Message of the day (contributor Melker) *******/ 
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  //Petras tillägg till melkers kod
  let nrOfTrue = 0;

  for (const messageid of Object.keys(messageObj).reverse()) {
    const message = messageObj[messageid];

    const postTimestamp = message.timestamp;
    const postDate = new Date(postTimestamp);
    const hours = postDate.getHours().toString().padStart(2, '0');
    const minutes = postDate.getMinutes().toString().padStart(2, '0');

    formattedTime = `${hours}:${minutes} | ${postDate.getDate()}-${postDate.getMonth() + 1}-${postDate.getFullYear()}`;

    const messageContainer = document.createElement('article');
    messageContainer.classList.add("message");

    const messageHeader = document.createElement('div');
    const messageHeaderDiv1 = document.createElement('div');
    const messageHeaderDiv2 = document.createElement('div');
    const messageHeaderText = document.createElement('h3');
    const messageBody = document.createElement('div');
    const messageText = document.createElement('p'); 

    // const messageText = document.createElement('input'); //Alriks
    // const messageText = document.createElement('textarea'); //Testar med textarea istälelt
    // messageText.classList.add('EditableInput');//Alriks


    const messageFooter = document.createElement('div');
    const messageFooterDiv1 = document.createElement('div');
    const messageFooterDiv2 = document.createElement('div');

    messagesSection.append(messageContainer);
    messageContainer.append(messageHeader, messageBody, messageFooter);
    messageHeader.append(messageHeaderDiv1, messageHeaderDiv2);
    messageHeaderDiv1.append(messageHeaderText);
    messageBody.append(messageText);
    messageFooter.append(messageFooterDiv1, messageFooterDiv2);

    messageHeader.classList.add("messageHeader");
    messageBody.classList.add("messageBody");
    messageFooter.classList.add("messageFooter");

    messageHeaderText.innerText = message.name;
    messageHeaderDiv2.innerText = formattedTime;
    messageText.innerText = message.text; //Orginal


    //Alriks ******************************/
    // messageText.value = message.text;//Alriks
    // messageText.addEventListener('keypress', async (event) => {
    //   if (event.key === 'Enter') {
    //     alert('edited');
    //     messageText.blur();

    //     const postData = {
    //       text: messageText.value,
    //       timestamp: serverTimestamp(),
    //     };

    //     const messageSound = new Audio('./sound/message_sent.mp3');
    //     messageSound.play();

    //     await set(ref(db, 'posts/' + messageid), postData, newPostRef);
    //   }
    // });

    //Alriks  slut ******************************/



    //Like message
    const likeButton = document.createElement('button');
    const showLikes = document.createElement('span');
    likeButton.classList.add('likeButton');
    messageFooterDiv1.appendChild(likeButton);
    likeButton.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
    let likesTotal = message.likes || 0;
    showLikes.innerText = likesTotal;
    
    function clickLike() {
      likesTotal++;
      showLikes.innerText = likesTotal;
    
      const updatedPostData = {
        ...message,
        likes: likesTotal
      };
    
      set(ref(db, `posts/${messageid}`), updatedPostData);
    }

    likeButton.addEventListener('click', clickLike);
    likeButton.appendChild(showLikes);


    //Delete message
    const deleteButton = document.createElement('button');
    messageFooterDiv2.appendChild(deleteButton);
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'Radera';
    
    deleteButton.addEventListener('click', () => deleteMessage(messageid));
  
    /********* Message of the day (contributor Melker) *******/ 
    const timeIncludesTime = formattedTime.includes(currentDate);
    if (timeIncludesTime) { 
      nrOfTrue++; //petras add
    }
  }

  /********* Message of the day (contributor Melker) *******/ 
  const allArticles = messagesSection.querySelectorAll('article'); //Bytte namn för lättläslighet/logik
  const randomIndex = (Math.floor(Math.random()*nrOfTrue));
  const randomSelected = allArticles[randomIndex]; 
  // if(randomSelected){ // fyller ingen funktion då den alltid är sann /Petra
  // const messageOfTheDay = document.createElement('span'); //Ändrade från p
  // randomSelected.append(messageOfTheDay);
  // messageOfTheDay.innerText = 'Message of the day';
  randomSelected.classList.add('messageOfTheDay'); // Ger den blåa bakgrunden
  // }

}


/****************************************
Formulär - meddelanden till databasen
*****************************************/
export function handlePostForm() {
  const postForm = document.getElementById('messageForm');
  const postTextInput = document.getElementById('postText');

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const postText = postTextInput.value;

    const newPostRef = push(ref(db, 'posts'));
    const postData = {
      name: userName,
      text: postText,
      timestamp: serverTimestamp(),
      likes: 0
    };

    /********* Sound when message is sent (contributor Luna) *******/ 
    const messageSound = new Audio("./sound/message_sent.mp3");
    messageSound.play();
    /* Lunas kod slut */

    await set(newPostRef, postData);

    //Rensar meddalndefältet
    postTextInput.value = '';
    postTextInput.focus();

  });
}


/****************************************
  Raderar meddelanden
*****************************************/

export async function deleteMessage(messageid) {
  if (confirm('Are you sure?')) {
    try {
      const messageRef = ref(db, `posts/${messageid}`);
      await set(messageRef, null);
    } 
    catch (error) {
    // } catch (displayError) {
      displayError();
      console.error('Error deleting message:', error);
    }
  }
}


/********************************************
   Error messages
*********************************************/

export function displayError(error) {
  let message;
  const errorContainer = document.querySelector('#errorContainer');
  hideElements(allSections);
  errorContainer.classList.remove('hide');

  if (error === 404) { 
    message = 'Inga meddelanden hittades.';
  }
  else{ 
    message = 'Något gick fel, försök igen.' 
  }
  
  const errorMessage = document.querySelector('#errorMessage');
  errorMessage.innerText = message;

}


//Nedan behövs troligen inte

/*********************************
  Hide sections  
**********************************/

function hideElements(array){
  array.forEach((element) => element.classList.add("hide"));
}


