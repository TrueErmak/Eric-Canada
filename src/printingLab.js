document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.querySelector('.like-button');
    likeButton.addEventListener('click', function() {
        this.textContent = 'Liked!';
        this.disabled = true; // Optional: Disable button after clicking
    });
});