let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// -----------second---------------------
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) { slideIndex1 = 1 }
  if (n < 1) { slideIndex1 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
}



// function showSidebar(){
//   const sideBar=document.querySelector(".nav-list1-uli")
//   sideBar.style.display="flex"
// }

// function hideSidebar(){
//   const sideBar=document.querySelector(".nav-list1-ul")
//   sideBar.style.display="none"
// }


// document.addEventListener("DOMContentLoaded", function() {
//   const menuBar = document.querySelector('.menu-bar');
//   menuBar.classList.add('show');
// });



// function showSidebar(){
//   const sideBar=document.querySelector(".nav-list1")
//   sideBar.classList.add('show');
// }
// function hideSidebar(){
//     const sideBar=document.querySelector(".nav-list1")
//     sideBar.classList.remove('show');
//   }
//   function hideSidebar() {
//     const sideBar = document.querySelector(".nav-list1");
//     sideBar.style.display = "none"; // Corrected this line
//   }


// function showSidebar() {
//   const sideBar = document.querySelector(".nav-list1");
//   sideBar.classList.add('show');
// }

// function hideSidebar() {
//   const sideBar = document.querySelector(".nav-list1");
//   sideBar.classList.remove('show');  
// }

function showSidebar() {
  const sideBar = document.querySelector(".nav-list1");
  sideBar.classList.add('show');
}

function hideSidebar() {
  const sideBar = document.querySelector(".nav-list1");
  sideBar.classList.remove('show');
}

