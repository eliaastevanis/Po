document.getElementById('hi').innerHTML = "hi, i'm";

document.getElementById('name').innerHTML = 'ELIA STEVANI';

document.getElementById('capt').innerHTML = 'Welcome to My Personal Website!';

document
  .getElementById('button-aboutme')
  .addEventListener('click', function () {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  });

document
  .getElementById('button-contact')
  .addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

// Slider Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval; // Variabel menyimpan interval

// hide semua slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Menghapus class aktif
    if (i === index) {
      slide.classList.add('active'); // show slide yang sesuai
    }
  });
}

// show slide pertama
showSlide(currentSlide);

// ganti slide
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // itung next slide
  showSlide(currentSlide);
  resetInterval(); // Reset interval setiap kali slide berubah
}

// ganti tiap 3 detik
function startInterval() {
  slideInterval = setInterval(() => changeSlide(1), 3000);
}

// stop interval
function resetInterval() {
  clearInterval(slideInterval);
  startInterval(); // Mulai interval baru
}

// start
startInterval();

// Slider Python
let currentSlidePy = 0;
const slidesPy = document.querySelectorAll('.carousel-py .carousel-item');
const totalSlidesPy = slidesPy.length;

function showSlidePy(index) {
  slidesPy.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function changeSlidePy(direction) {
  currentSlidePy = (currentSlidePy + direction + totalSlidesPy) % totalSlidesPy;
  showSlidePy(currentSlidePy);
}

// Event listeners for Python slider
document.getElementById('nextButtonPy').addEventListener('click', () => {
  changeSlidePy(1);
});

document.getElementById('prevButtonPy').addEventListener('click', () => {
  changeSlidePy(-1);
});

showSlidePy(currentSlidePy);

// Slider Intern
let currentSlidePapi = 0;
const slidesPapi = document.querySelectorAll('.carousel-papi .carousel-item');
const totalSlidesPapi = slidesPapi.length;

function showSlidePapi(index) {
  slidesPapi.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function changeSlidePapi(direction) {
  currentSlidePapi =
    (currentSlidePapi + direction + totalSlidesPapi) % totalSlidesPapi;
  showSlidePapi(currentSlidePapi);
}

// Event listeners for Intern slider
document.getElementById('nextButtonPapi').addEventListener('click', () => {
  changeSlidePapi(1);
});

document.getElementById('prevButtonPapi').addEventListener('click', () => {
  changeSlidePapi(-1);
});

showSlidePapi(currentSlidePapi);

// Slider Organization
let currentSlideOrg = 0;
const slidesOrg = document.querySelectorAll(
  '.carousel-organization .carousel-item'
);
const totalSlidesOrg = slidesOrg.length;

// Function to show the current slide
function showSlideOrg(index) {
  slidesOrg.forEach((slide, i) => {
    slide.classList.remove('active'); // Remove active class
    if (i === index) {
      slide.classList.add('active'); // Show the active slide
    }
  });
}

// Function to change slide
function changeSlideOrg(direction) {
  currentSlideOrg =
    (currentSlideOrg + direction + totalSlidesOrg) % totalSlidesOrg; // Calculate next slide
  showSlideOrg(currentSlideOrg);
}

// Event listeners for Organization slider
document.getElementById('nextButtonOrg').addEventListener('click', () => {
  changeSlideOrg(1); // Next slide
});

document.getElementById('prevButtonOrg').addEventListener('click', () => {
  changeSlideOrg(-1); // Previous slide
});

// Show the first slide initially
showSlideOrg(currentSlideOrg);
