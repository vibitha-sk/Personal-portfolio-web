const text = 'Yet Another "CS" Student!';
const introElement = document.querySelector('.intro');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        introElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust speed
    } else {
        introElement.style.borderRight = 'none'; // Remove cursor after typing
    }
}

window.onload = typeEffect;
