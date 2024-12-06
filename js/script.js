// Slider Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); // Mengambil semua elemen slide
const totalSlides = slides.length;
let slideInterval; // Variabel untuk menyimpan interval

// Menyembunyikan semua slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Menghapus class aktif
    if (i === index) {
      slide.classList.add('active'); // Menampilkan slide yang sesuai
    }
  });
}

// Menampilkan slide pertama
showSlide(currentSlide);

// Fungsi untuk mengganti slide
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Menghitung slide berikutnya
  showSlide(currentSlide);
  resetInterval(); // Reset interval setiap kali slide berubah
}

// Mengatur interval untuk otomatis mengganti slide setiap 3 detik
function startInterval() {
  slideInterval = setInterval(() => changeSlide(1), 3000);
}

// Menghentikan interval
function resetInterval() {
  clearInterval(slideInterval);
  startInterval(); // Mulai interval baru
}

// Mulai interval saat halaman dimuat
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

// Tampilkan slide pertama saat halaman dimuat
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

// Tampilkan slide pertama saat halaman dimuat
showSlidePapi(currentSlidePapi);
