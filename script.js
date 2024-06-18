// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const texts = [ "I'm Kennedy Asuncion"," aka" , "Junli"];
  let count = 0; // Counter for texts array
  let index = 0; // Index of current text
  let currentText = ''; // Current text being typed
  let letter = ''; // Current letter being typed

  (function type() {
    if (count === texts.length) {
      count = 0; // Reset count to loop through texts array again
    }
    currentText = texts[count]; // Get current text
    letter = currentText.slice(0, ++index); // Get letters from 0 to index

    document.querySelector('.text-two').textContent = letter; // Replace text in HTML with current letter

    if (letter.length === currentText.length) {
      count++; // Move to next text in texts array
      index = 0; // Reset index
    }

    setTimeout(type, 150); // Typing speed (adjust as needed)
  })();
});

function openInNewTab(sectionId) {
  var url = window.location.href.split('#')[0] + sectionId;
  var win = window.open(url, '_blank');
  win.focus();
}

