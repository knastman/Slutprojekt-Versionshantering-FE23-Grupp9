
import { db } from './modules/api.js';
import { ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';
 
import { displayMessage, handlePostForm, displayError } from './modules/messages.js';

// Elvira Ericsson, feel free att ta bort denna kommentar, ville vara tydlig bara.
import { scroll, scrollToTopFunction } from './modules/scrollToTop.js';

// Hanterar formuläret
handlePostForm();

//Hämtar meddelanden från databasen
const messageDatabaseRef = ref(db, 'posts');
onValue(messageDatabaseRef, (snapshot) => {
  const posts = snapshot.val();
  try {
    displayMessage({ Messages: posts });
  } catch (error) {
    displayError(); //Vet inte om det ska stå error i parantesen här också
  }
});

// Scroll to top when user presses button.
// Elvira Ericsson 
window.addEventListener('scroll', scroll);
document.getElementById('to-the-top-button').addEventListener('click', scrollToTopFunction);





















