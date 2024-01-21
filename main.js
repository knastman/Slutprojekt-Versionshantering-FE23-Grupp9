import {getMessages } from './modules/api.js';
import {displayMessage, getRandomIntTop, getRandomIntLeft } from './modules/interface.js'; 
// import {messageInput, messagesContainer, sendMessage} from './modules/script.js';
import {messageInput, messagesContainer, sendMessage} from './modules/messages.js';



// getMessages();
// console.log(getMessages());
// console.log(getRandomIntTop());
// console.log(getRandomIntLeft());


window.addEventListener("load", onPageLoad);
function onPageLoad(){
  getMessages()
  .then(displayMessage)
  // .catch(displayError);
}


document.getElementById("messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});












