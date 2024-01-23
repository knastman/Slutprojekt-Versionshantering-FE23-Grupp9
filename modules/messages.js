import { db } from './api.js';
import { push, serverTimestamp, set, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const allSections = document.querySelectorAll('section');

/****************************************
  Hämtar och visa meddelande
*****************************************/



export function displayMessage(messages) {
  
  // console.log(messages);
  // console.log(messages.Messages);
  // console.log(messages.Messages.message1);
  
  const messageObj = messages.Messages;
  
  console.log('messageObj');
  console.log(messageObj);
  
  // const messagesSection = document.querySelector('#messagesContainer');
  const messagesSection = document.querySelector('.messages');

  /*******André - jag tänkte först att vi inte skulle ha sidor utan sections, därför jag la in denna funktionen, vet fortfarnde inte om det är bättre att ha separata sidor eller inte, vad tycker du? ****/
  
  // hideElements(allSections);
  // movieListSection.classList.remove("hide");

  messagesSection.innerHTML = '';

  for (const messageid of Object.keys(messageObj)) {
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
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => DeleteMessage(messageid));

    messageHeaderDiv2.appendChild(deleteButton);
  }
}


/****************************************
Formulär - lägger in meddelanden till databasen
*****************************************/

export function handlePostForm() {
  const postForm = document.getElementById('messageForm');
  const postTextInput = document.getElementById('postText');

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postText = postTextInput.value;
    const userName = document.getElementById('userName').value;

    const newPostRef = push(ref(db, 'posts'));

    const postData = {
      name: userName,
      text: postText,
      timestamp: serverTimestamp()
    };

    await set(newPostRef, postData);

//så man slipper fylla i användarnamn för varje nytt meddelande

    postTextInput.value = '';

    postTextInput.focus();
  });
}




/****************************************
  Raderar meddelanden
*****************************************/

export async function DeleteMessage(messageid) {
  if (confirm('Are you sure?')) {
    try {

      const messageRef = ref(db, `posts/${messageid}`);

      await set(messageRef, null);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  }
}

onValue(ref(db, 'posts'), (snapshot) => {
  const posts = snapshot.val();
  displayMessage({ Messages: posts });
});




/************** NEDAN BEÖVS KANSKE INTE men man borde ävl ha ngn slags errorhantering? **************/

/*********************************
  Hide sections  
**********************************/

// function hideElements(array){
//   array.forEach((element) => element.classList.add("hide"));
// }



/********************************************
   Error messages
*********************************************/

// function displayError(error) {
//   let message;
//   const errorContainer = document.querySelector('#errorContainer');
//   hideElements(allSections);
//   errorContainer.classList.remove('hide');

//   if (error === 404) { 
//     message = 'No results found. Try again.';
//   }
//   else{ 
//     message = 'Something went wrong, try again later.' 
//   }
  
//   const errorMessageHeader = document.querySelector('#errorMessage');
//   errorMessageHeader.innerText = message;

// }

