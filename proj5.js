

  
  
  // Add active class to the current button (highlight it)
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  

    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }

//Navigation Buttons
function openOverlay(index) {
const prevButton = document.createElement('span');
prevButton.classList.add('prev-btn');
prevButton.innerHTML = '&#10094;';
prevButton.onclick = () => showOverlayImage(index - 1);

const nextButton = document.createElement('span');
nextButton.classList.add('next-btn');
nextButton.innerHTML = '&#10095;';
nextButton.onclick = () => showOverlayImage(index + 1);}

let slideIndex = 1;

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the active slide
    slides[slideIndex - 1].style.display = "block";
}

// Initialize slideshow on load
document.addEventListener("DOMContentLoaded", () => {
    showDivs(slideIndex);
});