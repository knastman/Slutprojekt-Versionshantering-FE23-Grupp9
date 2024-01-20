// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import { getDatabase} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import { getDatabase, onValue, push, ref} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import { collection, getDocs  } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"; //exempel från docs
import { firebaseConfig } from './apiconfig.js';


/***************SCRIPTEXEMPEL FRÅN SCRIPT 2  *************/

//import { getDatabase, ref, set, onValue, remove, push, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"; // <---


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getDatabase(app); //från docs och script2 
// console.log(db);



//Gritsquare/Petras databas
const BASE_URL = `https://versionshantering---gritsquare-default-rtdb.europe-west1.firebasedatabase.app/.json`;


async function getMessages() {
  let response = await fetch(BASE_URL);
  let data = await response.json();
  // console.log(data);
  return data;
}

export {getMessages};










