//Blir felmeddelande varje gång den är öppen
//import {getMessages } from './modules/api.js';

 
import { displayMessage, handlePostForm, DeleteMessage } from './modules/messages.js';
// import { ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';
// import { db } from './modules/api.js';


// Hanterar formuläret
handlePostForm();

// Hämtar meddelanden från databasen 
// onValue(ref(db, 'posts'), (snapshot) => {
//   const posts = snapshot.val();
//   displayMessage({ Messages: posts });
// });



// getMessages();



 // getMessages()
//  .then(displayMessage)
  // .catch(displayError);


















