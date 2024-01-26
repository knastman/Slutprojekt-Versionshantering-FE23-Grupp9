import { db } from './modules/api.js';
import { ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';
import { displayMessage, handlePostForm, displayError } from './modules/messages.js';
import * as cookies from './modules/cookies.js'; // Tims 
import { scroll, scrollToTopFunction } from './modules/scrollToTop.js';// Elviras

// Hanterar formuläret
handlePostForm();

//Hämtar meddelanden från databasen
const messageDatabaseRef = ref(db, 'posts');
onValue(messageDatabaseRef, (snapshot) => {
  const posts = snapshot.val();
  try {
    displayMessage({ Messages: posts });
  } 
  catch (error) {
    displayError();
  }
});

/**** Scroll to top when user presses button (contributor Elvira Ericsson ) *****/ 
window.addEventListener('scroll', scroll);
document.getElementById('to-the-top-button').addEventListener('click', scrollToTopFunction);


/**** Sparar användarnamn i cookies (contributor Tim )*****/ 
//Hämtar användarnamn från cookies  
const username = document.querySelector("#userName");
username.value = cookies.getCookie("username") ?? "";

// Sparar användarnamn i cookies
username.addEventListener('focusout', (e) => cookies.setCookie("username", e.target.value));













