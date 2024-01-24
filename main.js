
import { db } from './modules/api.js';
import { ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';
 
import { displayMessage, handlePostForm, deleteMessage } from './modules/messages.js';


// Hanterar formuläret
handlePostForm();

//Hämtar meddelanden från databasen
const messageDatabaseRef = ref(db, 'posts');
onValue(messageDatabaseRef, (snapshot) => {
  try {
    const posts = snapshot.val();
    displayMessage({ Messages: posts });
  } catch (error) {
    displayError(); //Vet inte om det ska stå error i parantesen här också
  }
});












// onValue(ref(db, 'posts'), (snapshot) => {
//   try {
//     // påhittat fel för testa
//     // throw new Error('Detta är ett testfel.');

//     const posts = snapshot.val();
//     displayMessage({ Messages: posts });
//   } catch (error) {
//     displayError(); //Vet inte om det ska stå error i parantesen här också
//   }
// });




















