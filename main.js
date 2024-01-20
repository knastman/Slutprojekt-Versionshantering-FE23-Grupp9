import {getMessages } from './modules/api.js';
import {getRandomIntTop, getRandomIntLeft } from './modules/interface.js'; 


// getMessages();
// console.log(getMessages());


console.log('getRandomIntTop');
console.log(getRandomIntTop());
console.log('getRandomIntLeft');
console.log(getRandomIntLeft());


const allSections = document.querySelectorAll('section');

window.addEventListener("load", onPageLoad);

function onPageLoad(){
  getMessages()
  .then(displayMessage)
  // .catch(displayError);

}

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
  const messagesSection = document.querySelector('#messages');

  // hideElements(allSections);
  // movieListSection.classList.remove("hide");




  for (const messageid of Object.keys(messageObj)) {
    const message = messageObj[messageid];
    const messageContainer = document.createElement('article');
    messageContainer.classList.add("message");

    const messageHeader = document.createElement('h3');
    const messageText = document.createElement('p');
   
    messagesSection.append(messageContainer);
    messageContainer.append(messageHeader, messageText);

    messageHeader.innerText = messageid;
    messageText.innerText =  message;
    // messageContainer.setAttribute("id", message.id);
  }
}


/*********************************
  Hide sections  
**********************************/

function hideElements(array){
  array.forEach((element) => element.classList.add("hide"));
}

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











