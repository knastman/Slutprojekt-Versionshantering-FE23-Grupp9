//klockan är nu 01:44
//displayMessage från gamla interfacen inkopierad av André. Nyare med kommentarer finns längre ner på sidan

export function displayMessage(messages) {
  
  // console.log(messages);
  // console.log(messages.Messages);
  // console.log(messages.Messages.message1);
  
  const messageObj = messages.Messages;
  
  console.log('messageObj');
  console.log(messageObj);
  
  const messagesSection = document.querySelector('#messagesContainer');

  // hideElements(allSections);
  // movieListSection.classList.remove("hide");

  handlePostForm()

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

    messageHeaderText.innerText = messageid;
    messageText.innerText = message.text;
    messageHeaderDiv2.innerText = "19.43 | 24-01-21";
    
    // messageContainer.setAttribute("id", message.id);
  }
}

onValue(ref(db, 'posts'), (snapshot) => {
  const posts = snapshot.val();
  displayMessage({ Messages: posts });
});

function handlePostForm() {
  const postForm = document.getElementById('messageForm');

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postText = document.getElementById('messageInput').value;

    const newPostRef = push(ref(db, 'posts'));

    const postData = {
      text: postText,
      timestamp: serverTimestamp()
    };

    await set(newPostRef, postData);

    postForm.reset();
  });
}

//uppdatering slut











import { db } from './api.js';
import { push, serverTimestamp, set, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

export function handlePostForm() {
  const postForm = document.getElementById('messageForm');

  const messagesContainer = document.getElementById("messages");
  //Jag tror denna måste ändras till nedan
  //const messagesContainer = document.getElementById("messagesContainer");

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const postText = document.getElementById('messageInput').value;
    const newPostRef = push(ref(db, 'posts'));

    const postData = {
      text: postText,
      timestamp: serverTimestamp()
    };

    set(newPostRef, postData);
    postForm.reset();
  });



  function sendMessage(message, timestamp) {
    const messageDiv = document.createElement("div");
    const normalTime = new Date(timestamp).toLocaleString();
    messageDiv.innerHTML = normalTime + " " + message;
    messageDiv.classList.add("message");
    messagesContainer.appendChild(messageDiv);
  }




/*********************************
  Hämtar meddelanden
**********************************/

  //Hämtar meddelanden -> André kan du ta gränssnittet från den jag byggde och bygga ihop dom?
  onValue(ref(db, 'posts'), (snapshot) => {
    const posts = snapshot.val();
    messagesContainer.innerHTML = '';

    for (const postId in posts) {
      const post = posts[postId];
      sendMessage(post.text, post.timestamp);
    }
  });
}



/**************************** Från interface.js************* */


const allSections = document.querySelectorAll('section');



/*********************************
 Display message
**********************************/

function displayMessage(messages){
  // console.log(messages);
  // console.log(messages.Messages);
  // console.log(messages.Messages.message1);
  const messageObj = messages.Messages;
  console.log('messageObj');
  console.log(messageObj);
  const messagesSection = document.querySelector('#messagesContainer');

  // hideElements(allSections);
  // movieListSection.classList.remove("hide");

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

    messageHeader.append(messageHeaderDiv1,messageHeaderDiv2);
    messageHeaderDiv1.append(messageHeaderText);
    messageBody.append(messageText);

    messageHeaderText.innerText = messageid;
    messageText.innerText =  message;
    messageHeaderDiv2.innerText = "19.43 | 24-01-21"
    // messageContainer.setAttribute("id", message.id);
  }
}


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

