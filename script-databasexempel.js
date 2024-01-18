// Alriks databas
const BASE_URL = "https://demo1-3c759-default-rtdb.europe-west1.firebasedatabase.app/.json";

/* PUT - skriver in saker men raderar innehåll */
async function putMessage() {
    
    let messageObject = { text: "Hello world put", time: new Date() };

    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch(BASE_URL,requestOptions);
    let data = await response.json();
    console.log(data);
}

/* PATCH - uppdaterar utan att radera saker */
async function patchMessage() {
    
    let messageObject = { text: "Hello world put", time: new Date() };

    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch(BASE_URL,requestOptions);
    let data = await response.json();
    console.log(data);
}async function patchMessage2() {
    
    let messageObject = { firstName: "Alrik", lastName: "HE" };

    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch("https://demo1-3c759-default-rtdb.europe-west1.firebasedatabase.app/-NoCf2s5SInOIFR3X0VX/.json"   ,requestOptions);
    let data = await response.json();
    console.log(data);
}

/* POST - genererar ett unikt id som datan är i */
async function postMessage() {
    let messageObject = { text: "Hello world", time: new Date() };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageObject),
    };

    let response = await fetch(BASE_URL,requestOptions);
    let data = await response.json();
    console.log(data);
}

/* GET - default - läser innehållet baserat på adressen */ 
async function getMessages() {
    let response = await fetch(BASE_URL);
    let data = await response.json();
    console.log(data);
}

/* DELETE - raderar innehåll baserat på URL */
async function deleteMessage() {
    const requestOptions = {
        method: "DELETE",
    };
    let response = await fetch(BASE_URL,requestOptions);
    let data = await response.json();
    console.log(data);
}