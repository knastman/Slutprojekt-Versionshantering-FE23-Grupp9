import {getMessages } from './modules/api.js';
import {displayMessage, getRandomIntTop, getRandomIntLeft } from './modules/interface.js'; 



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

















