import { db } from './api.js';
<<<<<<< HEAD
import { push, serverTimestamp, set, ref } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const allSections = document.querySelectorAll('section');
const errorContainer = document.querySelector('#errorContainer');
=======
import { push, serverTimestamp, set, ref} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const allSections = document.querySelectorAll('section');
const errorContainer = document.querySelector('#errorContainer');

>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)

/****************************************
 Bygger gränssnitt för meddelandevisning
*****************************************/

export function displayMessage(messages) {
  //Petra kolla koden här o rensa
  const messageObj = messages.Messages;
  // const messageObj2 = messages;
  // console.log('messageObj');
  // console.log(messageObj);
  // console.log('messageObj2');
  // console.log(messageObj2);
<<<<<<< HEAD
  const messagesSection = document.querySelector('.messages');
=======
  const messagesSection = document.querySelector('.messages');  
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
  // hideElements(allSections);
  // movieListSection.classList.remove("hide");

  messagesSection.innerHTML = '';
  let formattedTime = '';

<<<<<<< HEAD
  // Melker grupp 5 message of the day feature
=======
// Melker grupp 5 message of the day feature
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  //Petras tillägg till melkers kod
  let nrOfTrue = 0;

<<<<<<< HEAD
  for (const messageid of Object.keys(messageObj).reverse()) {
    const message = messageObj[messageid];
    // console.log('message');
    // console.log(message);

    const postTimestamp = message.timestamp;
    const postDate = new Date(postTimestamp);
    const hours = postDate.getHours().toString().padStart(2, '0');
    const minutes = postDate.getMinutes().toString().padStart(2, '0');

    formattedTime = `${hours}:${minutes} | ${postDate.getDate()}-${postDate.getMonth() + 1}-${postDate.getFullYear()}`;

    const messageContainer = document.createElement('article');
    messageContainer.classList.add('message');

    const messageHeader = document.createElement('div');
    const messageHeaderDiv1 = document.createElement('div');
    const messageHeaderDiv2 = document.createElement('div');
    const messageHeaderText = document.createElement('h3');
    const messageBody = document.createElement('div');
    //const messageText = document.createElement('p');
    const messageText = document.createElement('input');
    messageText.classList.add('EditableInput');

=======

  for (const messageid of Object.keys(messageObj).reverse()) {
    const message = messageObj[messageid];
    // console.log('message');
    // console.log(message);

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
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
    const messageFooter = document.createElement('div');
    const messageFooterDiv1 = document.createElement('div');
    const messageFooterDiv2 = document.createElement('div');

    messagesSection.append(messageContainer);
    messageContainer.append(messageHeader, messageBody, messageFooter);
    messageHeader.append(messageHeaderDiv1, messageHeaderDiv2);
    messageHeaderDiv1.append(messageHeaderText);
    messageBody.append(messageText);
    messageFooter.append(messageFooterDiv1, messageFooterDiv2);

<<<<<<< HEAD
    messageHeader.classList.add('messageHeader');
    messageBody.classList.add('messageBody');
    messageFooter.classList.add('messageFooter');

    messageHeaderText.innerText = message.name;
    messageHeaderDiv2.innerText = formattedTime;
    //messageText.innerText = message.text;
    messageText.value = message.text;
    messageText.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        alert('edited');
        messageText.blur();

        const postData = {
          text: messageText.value,
          timestamp: serverTimestamp(),
        };

        const messageSound = new Audio('./sound/message_sent.mp3');
        messageSound.play();

        await set(ref(db, 'posts/' + messageid), postData, newPostRef);
      }
    });

=======
    messageHeader.classList.add("messageHeader");
    messageBody.classList.add("messageBody");
    messageFooter.classList.add("messageFooter");

    messageHeaderText.innerText = message.name;
    messageHeaderDiv2.innerText = formattedTime;
    messageText.innerText = message.text;


>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
    //Like message
    const likeButton = document.createElement('button');
    const showLikes = document.createElement('span');
    likeButton.classList.add('likeButton');
    messageFooterDiv1.appendChild(likeButton);
<<<<<<< HEAD

=======
   
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
    // likeButton.innerText = 'Gilla';
    likeButton.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
    let likesTotal = message.likes || 0;
    showLikes.innerText = likesTotal;
<<<<<<< HEAD

    function clickLike() {
      likesTotal++;
      showLikes.innerText = likesTotal;

      const updatedPostData = {
        ...message,
        likes: likesTotal,
      };

=======
    
    function clickLike() {
      likesTotal++;
      showLikes.innerText = likesTotal;
    
      const updatedPostData = {
        ...message,
        likes: likesTotal
      };
    
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
      set(ref(db, `posts/${messageid}`), updatedPostData);
    }
    likeButton.addEventListener('click', clickLike);
    likeButton.appendChild(showLikes);
<<<<<<< HEAD

    //Delete messege
    const deleteButton = document.createElement('button');
    messageFooterDiv2.appendChild(deleteButton);
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'Radera';

    deleteButton.addEventListener('click', () => deleteMessage(messageid));

    //Message of the day (contributor Melker)
    const timeIncludesTime = formattedTime.includes(currentDate);
    if (timeIncludesTime) {
      nrOfTrue++; //petras add
    }
  }

  // Melker grupp 5 message of the day feature
  // const selected = messagesSection.querySelectorAll('article'); // Hämtar ALLA oavsett datum /Petra
  const allArticles = messagesSection.querySelectorAll('article'); //Bytte namn för lättläslighet/logik
  const randomIndex = Math.floor(Math.random() * nrOfTrue);
  const randomSelected = allArticles[randomIndex];
  // if(randomSelected){ // fyller ingen funktion då den alltid är sann /Petra
  const messageOfTheDay = document.createElement('span'); //Ändrade från p
  randomSelected.classList.add('messageOfTheDay');
  randomSelected.append(messageOfTheDay);
  // messageOfTheDay.innerText = 'Message of the day';
  // messageOfTheDay.innerText = 'MOTD'; // hur hämtar jag footern i denna
  // }
=======

  
    //Delete messege
    const deleteButton = document.createElement('button');
    messageFooterDiv2.appendChild(deleteButton);
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'Radera';
    
    deleteButton.addEventListener('click', () => deleteMessage(messageid));
  

    //Message of the day (contributor Melker)
    const timeIncludesTime = formattedTime.includes(currentDate);
    if (timeIncludesTime) { 
      nrOfTrue++; //petras add
    }
  }

  // Melker grupp 5 message of the day feature
  // const selected = messagesSection.querySelectorAll('article'); // Hämtar ALLA oavsett datum
  const allArticles = messagesSection.querySelectorAll('article'); //Bytte namn för lättläslighet/logik
  const randomIndex = (Math.floor(Math.random()*nrOfTrue));
  const randomSelected = allArticles[randomIndex]; 
  // if(randomSelected){ // fyller ingen funktion då den alltid är sann /Petra
  const messageOfTheDay = document.createElement('span'); //Ändrade från p
  randomSelected.classList.add('messageOfTheDay');
  randomSelected.append(messageOfTheDay);
  // messageOfTheDay.innerText = 'Message of the day';
  // messageOfTheDay.innerText = 'MOTD'; // hur hämtar jag footern i denna 
  // }

>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
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
<<<<<<< HEAD
      likes: 0,
    };

    /* Lunas kod */
    const messageSound = new Audio('./sound/message_sent.mp3');
=======
      likes: 0
    };

    /* Lunas kod */ 
    const messageSound = new Audio("./sound/message_sent.mp3");
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
    messageSound.play();
    /* Lunas kod slut */

    await set(newPostRef, postData);

    //Rensar meddalndefältet
    postTextInput.value = '';
    postTextInput.focus();
<<<<<<< HEAD
=======

>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
  });
}


/****************************************
  Raderar meddelanden
*****************************************/

export async function deleteMessage(messageid) {
  if (confirm('Are you sure?')) {
    try {
<<<<<<< HEAD
      const messageRef = ref(db, `posts/${messageid}`);

      await set(messageRef, null);
    } catch (error) {
      // } catch (displayError) {
=======

      const messageRef = ref(db, `posts/${messageid}`);

      await set(messageRef, null);
    } catch (error) {
    // } catch (displayError) {
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
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

<<<<<<< HEAD
  if (error === 404) {
    message = 'Inga meddelanden hittades.';
  } else {
    message = 'Något gick fel, försök igen.';
  }

  const errorMessage = document.querySelector('#errorMessage');
  errorMessage.innerText = message;
=======
  if (error === 404) { 
    message = 'Inga meddelanden hittades.';
  }
  else{ 
    message = 'Något gick fel, försök igen.' 
  }
  
  const errorMessage = document.querySelector('#errorMessage');
  errorMessage.innerText = message;

>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
}


//Nedan behövs troligen inte

/*********************************
  Hide sections  
**********************************/

<<<<<<< HEAD
function hideElements(array) {
  array.forEach((element) => element.classList.add('hide'));
=======
function hideElements(array){
  array.forEach((element) => element.classList.add("hide"));
>>>>>>> parent of ab1d668 (Editerabar text, tryck enter för att ändra texten)
}


