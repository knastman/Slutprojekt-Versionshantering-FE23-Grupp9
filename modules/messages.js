import { db } from './api.js';
import { push, serverTimestamp, set, ref} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const allSections = document.querySelectorAll('section');
const errorContainer = document.querySelector('#errorContainer');


/****************************************
 Bygger gränssnitt för meddelandevisning
*****************************************/

export function displayMessage(messages) {
  
  const messageObj = messages.Messages;
  const messagesSection = document.querySelector('.messages');
  
  // hideElements(allSections);
  // movieListSection.classList.remove("hide");

  messagesSection.innerHTML = '';

  for (const messageid of Object.keys(messageObj).reverse()) {
    const message = messageObj[messageid];
    const messageContainer = document.createElement('article');
    messageContainer.classList.add("message");

    const messageHeader = document.createElement('div');
    const messageHeaderDiv1 = document.createElement('div');
    const messageHeaderDiv2 = document.createElement('div');
    const messageBody = document.createElement('div');

    const messageHeaderText = document.createElement('h3');
    const messageText = document.createElement('p');

    messagesSection.append(messageContainer);
    messageContainer.append(messageHeader, messageBody);

    messageHeader.classList.add("messageHeader");
    messageBody.classList.add("messageBody");

    messageHeader.append(messageHeaderDiv1, messageHeaderDiv2);
    messageHeaderDiv1.append(messageHeaderText);
    messageBody.append(messageText);

    messageHeaderText.innerText = message.name;
    messageText.innerText = message.text;
    
    const postTimestamp = message.timestamp;
    const postDate = new Date(postTimestamp);
    const formattedTime = `${postDate.getHours()}:${postDate.getMinutes()} | ${postDate.getDate()}-${postDate.getMonth() + 1}-${postDate.getFullYear()}`;
    messageHeaderDiv2.innerText = formattedTime;
    
    //Delete messeges
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Radera';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => deleteMessage(messageid));

    messageBody.appendChild(deleteButton);
  }
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
      timestamp: serverTimestamp()
    };

    /* Lunas kod */ 
    const messageSound = new Audio("./sound/message_sent.mp3");
    messageSound.play();
    /* Lunas kod slut */

    await set(newPostRef, postData);

    //Rensar meddalndefältet
    postTextInput.value = '';
    postTextInput.focus();

  });
}


// Med try/catch, men oklart om det är rätt 
// export function handlePostForm() {
//   const postForm = document.getElementById('messageForm');
//   const postTextInput = document.getElementById('postText');

//   postForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const postText = postTextInput.value;
//     const userName = document.getElementById('userName').value;
//     const newPostRef = push(ref(db, 'posts'));
//     const postData = {
//       name: userName,
//       text: postText,
//       timestamp: serverTimestamp()
//     };
//     const messageSound = new Audio("./sound/message_sent.mp3"); //lunas

//     try {
//       messageSound.play(); //Lunas
//       await set(newPostRef, postData);
//       postTextInput.value = '';
//       postTextInput.focus();

//     } catch (error) {
//       console.log(error);
//       alert('Postning misslyckades');
//     }
//   });
// }

/****************************************
  Raderar meddelanden
*****************************************/

export async function deleteMessage(messageid) {
  if (confirm('Are you sure?')) {
    try {

      const messageRef = ref(db, `posts/${messageid}`);

      await set(messageRef, null);
    } catch (error) {
    // } catch (displayError) {
      console.error('Error deleting message:', error);
    }
  }
}




/********************************************
   Error messages
*********************************************/

function displayError(error) {
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

// function hideElements(array){
//   array.forEach((element) => element.classList.add("hide"));
// }


