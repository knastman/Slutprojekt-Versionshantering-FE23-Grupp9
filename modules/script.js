//en enkel message board

export const messageInput = document.getElementById("messageInput");
export const messagesContainer = document.getElementById("messages");

document.getElementById("messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});

export function sendMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.innerText = messageInput.value;
    messageDiv.classList.add("message");
    messagesContainer.appendChild(messageDiv);
}
