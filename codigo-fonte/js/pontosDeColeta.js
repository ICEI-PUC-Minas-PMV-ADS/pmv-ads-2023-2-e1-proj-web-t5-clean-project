let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carrosselContainer = document.querySelector('.carrossel-container');

function showSlide(n) {
  index = (n + totalSlides) % totalSlides;
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

function autoSlide() {
  nextSlide();
}

let slideInterval = setInterval(autoSlide, 3000); // Troca de slide a cada 3 segundos (3000 milissegundos)

function stopAutoSlide() {
  clearInterval(slideInterval);
}

document.getElementById('prevBtn').addEventListener('click', function() {
  prevSlide();
  stopAutoSlide();
});

document.getElementById('nextBtn').addEventListener('click', function() {
  nextSlide();
  stopAutoSlide();
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    prevSlide();
    stopAutoSlide();
  } else if (event.key === 'ArrowRight') {
    nextSlide();
    stopAutoSlide();
  }
});

document.querySelector('.carrossel').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.carrossel').addEventListener('mouseout', function() {
  slideInterval = setInterval(autoSlide, 5000);
});

showSlide(index);
