import { db } from './api.js';
import { push, serverTimestamp, set, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

export function handlePostForm() {
  const postForm = document.getElementById('messageForm');
  const messagesContainer = document.getElementById("messages");

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const postText = document.getElementById('messageInput').value;

    const newPostRef = push(ref(db, 'posts'));

    const postData = {
      text: postText,
      timestamp: serverTimestamp()
    };

    set(newPostRef, postData);

    postForm.reset();
  });

  function sendMessage(message, timestamp) {
    const messageDiv = document.createElement("div");
    const normalTime = new Date(timestamp).toLocaleString();
    messageDiv.innerHTML = normalTime + " " + message;
    messageDiv.classList.add("message");
    messagesContainer.appendChild(messageDiv);
  }

  onValue(ref(db, 'posts'), (snapshot) => {
    const posts = snapshot.val();
    messagesContainer.innerHTML = '';

    for (const postId in posts) {
      const post = posts[postId];
      sendMessage(post.text, post.timestamp);
    }
  });
}
