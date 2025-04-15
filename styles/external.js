const text = 'Yet Another "CS" Student !';
const introElement = document.querySelector('.intro');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        introElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust speed
    } 
}

window.onload = typeEffect;


/*first section in what i do*/
function revealContent() {
    const section = document.getElementById('what-i-do');
    section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
}
function revealContent() {
    const section = document.getElementById('what-i-do');
    section.style.display = 'block';  // Show the section
    setTimeout(() => {
        section.classList.add('visible');  // Add the 'visible' class after display
    }, 10);
}




function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}
