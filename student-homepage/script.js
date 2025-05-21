// script.js

document.addEventListener('DOMContentLoaded', function() {
    const posts = document.getElementById('posts');
    const postInput = document.getElementById('postInput');
    const addPostButton = document.getElementById('addPostButton');

    addPostButton.addEventListener('click', function() {
        const text = postInput.value.trim();
        if (text) {
            const li = document.createElement('li');
            li.textContent = text;
            posts.appendChild(li);
            postInput.value = '';
        }
    });
});