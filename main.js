

import {getMessages } from './modules/api.js';
// import {displayMessage, getRandomIntTop, getRandomIntLeft } from './modules/interface.js'; 
import { handlePostForm } from './modules/messages.js';

handlePostForm();
// getMessages();



//window.addEventListener("load", onPageLoad);

//function onPageLoad(){
 // getMessages()
//  .then(displayMessage)
  // .catch(displayError);
//}

//Andrés formulär
//Går denna bytas ut till den faktistka eventlistnern så det bara finns en? 
document.getElementById("messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});















