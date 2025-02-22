document.getElementById('menu').onclick = function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
const typingText = document.querySelector('.typing-text');
const texts = ["Web Developer", "Designer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}
function erase() {
    if (charIndex > 0) {
        typingText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 1000);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    if (texts.length) setTimeout(type, 1000);