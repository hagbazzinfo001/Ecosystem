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


// function showSidebar() {
//   const sideBar = document.querySelector(".nav-list1");
//   sideBar.classList.add('show');
// }

// function hideSidebar() {
//   const sideBar = document.querySelector(".nav-list1");
//   sideBar.classList.remove('show');
// }

// function toggleSidebar() {
//   const sideBar = document.querySelector(".nav-list1");
//   sideBar.classList.toggle('show');
// }
// function toggleSidebar() {
//   const sideBar = document.querySelector(".icon");
//   sideBar.classList.toggle('add');
//   sideBar.classList.remove('.menu');  
// }
function toggleSidebar() {
  const sideBar = document.querySelector(".nav-list1");
  const menuIcon = document.querySelector(".menu1");
  const closeIcon = document.querySelector(".icon");

  // Toggle the sidebar visibility
  sideBar.classList.toggle('show');

  // Toggle visibility of the icons
  menuIcon.classList.toggle('rem'); // Hide menu icon
  closeIcon.classList.toggle('add'); // Show close icon
}

