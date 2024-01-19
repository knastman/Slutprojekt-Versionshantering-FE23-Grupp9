// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import { collection, getDocs  } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"; //exempel från docs
import { firebaseConfig } from './apiconfig.js';


/***************SCRIPTEXEMPEL FRÅN SCRIPT 2  *************/

//import { getDatabase, ref, set, onValue, remove, push, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"; // <---


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// const db = getFirestore(app); //från docs
console.log(db);


//Gritsquare/Petras databas
const BASE_URL = `https://versionshantering---gritsquare-default-rtdb.europe-west1.firebasedatabase.app/`;
// const BASE_URL = `https://versionshantering---gritsquare-default-rtdb.europe-west1.firebasedatabase.app/.json`;
















