// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';
import { firebaseConfig } from './apiconfig.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };


// //Gritsquare databas
// const BASE_URL = `https://versionshantering---gritsquare-default-rtdb.europe-west1.firebasedatabase.app/.json`;


//async function getMessages() {
  //let response = await fetch(BASE_URL);
  //let data = await response.json();
  // console.log(data);
  //return data;
//}

//export {getMessages};













