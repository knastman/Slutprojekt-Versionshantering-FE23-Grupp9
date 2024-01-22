

import {getMessages } from './modules/api.js';
import {displayMessage, getRandomIntTop, getRandomIntLeft } from './modules/interface.js'; 
import { handlePostForm } from './modules/messages.js';

handlePostForm();
// getMessages();
// console.log(getMessages());
// console.log(getRandomIntTop());
// console.log(getRandomIntLeft());


//window.addEventListener("load", onPageLoad);

//function onPageLoad(){
 // getMessages()
//  .then(displayMessage)
  // .catch(displayError);
//}

//Andrés formulär
document.getElementById("messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});















