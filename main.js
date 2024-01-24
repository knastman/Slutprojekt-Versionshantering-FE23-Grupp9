
import { db } from './modules/api.js';
import { ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';
 
import { displayMessage, handlePostForm, displayError } from './modules/messages.js';


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























