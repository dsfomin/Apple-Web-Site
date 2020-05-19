var slideIndex = 1;

showImage(slideIndex);
var auto = setInterval(showSlides, 4000);

function stopAuto() {
  clearInterval(auto);
}

function continueAuto() {
  auto = setInterval(showSlides, 4000);
}
   
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active","");
  }
  slideIndex++;
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};

function plusIndex(n) {
  showImage(slideIndex += n);
}

function showImage(n) {
  var slide = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");


  if (n > slide.length) { slideIndex = 1};
  if (n < 1) { slideIndex = slide.length};

  for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  };
  slide[slideIndex-1].style.display = "block";

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
  }
  dots[slideIndex-1].className += " active";
}

function currentSlide(n) {
  showImage(slideIndex = n);
}