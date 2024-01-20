//en enkel message board

const messageInput = document.getElementById("messageInput");
const messagesContainer = document.getElementById("messages");

document.getElementById("messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});

function sendMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.innerText = messageInput.value;
    messageDiv.classList.add("message");
    messagesContainer.appendChild(messageDiv);
}
