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

const pontosColeta = {
  "Papel": ["Local 1 para Papel", "Local 2 para Papel"],
  "Metal": ["Local 1 para Metal", "Local 2 para Metal"],
  "Plástico": ["Local 1 para Plástico", "Local 2 para Plástico"],
  "Isopor": ["Local 1 para Isopor", "Local 2 para Isopor"],
  "Vidro": ["Local 1 para Vidro", "Local 2 para Vidro"],
  "Hospitalar": ["Local 1 para Hospitalar", "Local 2 para Hospitalar"],
  "Eletrônico": ["Local 1 para Eletrônico", "Local 2 para Eletrônico"]
  // Insira os pontos de coleta para cada tipo de resíduo
};

/* function buscar() {
  const residuoSelecionado = document.getElementById('residuo').value;
  const cidadeDigitada = document.getElementById('cidade').value;

  const resultado = encontrarPontosColeta(residuoSelecionado, cidadeDigitada);

  exibirResultado(resultado);
}

function encontrarPontosColeta(residuo, cidade) {
  if (pontosColeta[residuo]) {
      return `Pontos de coleta para ${residuo} em ${cidade}: ${pontosColeta[residuo].join(', ')}`;
  } else {
      return `Desculpe, não há pontos de coleta para ${residuo}.`;
  }
}

function exibirResultado(resultado) {
  document.getElementById('resultado').innerText = resultado;
} */


function buscar() {
  const residuoSelecionado = document.getElementById('residuo').value;
  const cidadeDigitada = document.getElementById('cidade').value;
  
  // Código para buscar os pontos de coleta com base no resíduo e na cidade
  // Suponhamos que os pontos de coleta são armazenados em um objeto pontosColeta

  const pontosColeta = {
      "Papel - Belo Horizonte": [
          "Local 1 para Papel em Belo Horizonte",
          "Local 2 para Papel em Belo Horizonte"
      ],
      "Metal - Belo Horizonte": [
          "Local 1 para Metal em Belo Horizonte",
          "Local 2 para Metal em Belo Horizonte"
      ],
      // ... Outros tipos de resíduos e cidades
  };
  
  const resultadoElement = document.getElementById('pontos-coleta');
  resultadoElement.innerHTML = ''; // Limpa o conteúdo anterior

  const chaveBusca = `${residuoSelecionado} - ${cidadeDigitada}`;
  const locaisColeta = pontosColeta[chaveBusca];

  if (locaisColeta) {
      locaisColeta.forEach(local => {
          const listItem = document.createElement('li');
          listItem.textContent = local;
          resultadoElement.appendChild(listItem);
      });
  } else {
      resultadoElement.innerHTML = 'Ainda não temos acesso aos pontos de coleta dessa cidade.';
  }
}

