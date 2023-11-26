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


// Requisição para carregar o arquivo JSON
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('botaoBuscar').addEventListener('click', buscar);
});

function buscar() {
  fetch('../../json/pontosDeColeta.json')
    .then(response => response.json())
    .then(data => {
      const pontosColeta = data;
  
      const residuoSelecionado = document.getElementById('residuo').value;
      const cidadeDigitada = document.getElementById('cidade').value;
      const resultadoElement = document.getElementById('pontos-coleta');
      resultadoElement.innerHTML = '';
    
      const chaveBusca = `${residuoSelecionado} - ${cidadeDigitada}`;
      const regioes = pontosColeta[chaveBusca];
    
      if (regioes) {
        for (const regiao in regioes) {
          const locaisColeta = regioes[regiao];
          const heading = document.createElement('h3');
          heading.textContent = regiao;
          resultadoElement.appendChild(heading);
    
          const listaPontos = document.createElement('ul');
          locaisColeta.forEach(local => {
            const listItem = document.createElement('li');
            listItem.textContent = local;
            listaPontos.appendChild(listItem);
          });
          resultadoElement.appendChild(listaPontos);
        }
      } else {
        resultadoElement.innerHTML = 'Ainda não temos acesso aos pontos de coleta dessa cidade.';
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}



