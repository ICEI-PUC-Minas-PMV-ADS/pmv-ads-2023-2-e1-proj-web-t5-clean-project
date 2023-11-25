window.addEventListener('load', trocarCadastrarPorSair);
//  Transição
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
});

//Validação
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  if (emailInput.value === "" || passwordInput.value === "") {
    e.preventDefault();
    alert("Por favor, preencha todos os campos.");
  }
});

function logar() {
  const login = document.getElementById("Login").value;
  const senha = document.getElementById("Senha").value;

  fetch("../../json/usuários.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar usuário");
      }
      return response.json();
    })

    .then((usuarios) => {
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === login && usuario.senha === senha
      );

      if (usuarioEncontrado) {
        alert("Sucesso!");
        location.href = "../home/index.html";
      } else {
        alert("Usuário ou senha incorretos!");
      }
    })

    .catch((error) => console.error("Erro:", error));
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
  };

  let usuarios = localStorage.getItem("usuarios");
  usuarios = usuarios ? JSON.parse(usuarios) : [];

  usuarios.push(novoUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  //window.location.href = '../home/index.html';

  trocarCadastrarPorSair();
}

//função para sair tela inical
function trocarCadastrarPorSair() {
  let usuarioLogado = localStorage.getItem("usuarios");

  const containerCadastro = document.getElementById("login");

  if (usuarioLogado != null) {

    var usuariosArmazenados = JSON.parse(usuarioLogado);

    containerCadastro.innerHTML =
    `<span><span class="ola">Olá! Bem-vindo(a) ${usuariosArmazenados[0].nome} <br></span><br><a href="../home/index.html" class="cadastro" onclick="deslogarUsuario()">Sair</a></span>`
    
  } else {
    containerCadastro.innerHTML =
      '<span><span class="ola">Olá!</span><br>Faça seu <a href="../cadastro/cadastro.html" class="cadastro">cadastro</a> para receber <br>notificações sobre a coleta seletiva da sua rua</span>';
  }
}


//função limpar registro de usuario
function deslogarUsuario(){
   
    localStorage.clear();
}

const formCadastro = document.querySelector(".form");

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  cadastrarUsuario(nome, email, senha);

  alert("Usuário cadastrado com sucesso!");
});

function togglePasswordVisibility(inputId) {
    const inputSenha = document.getElementById(inputId);

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
}
    const inputSenha = document.getElementById(inputId);

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }

//cadastraar Usuário

nome.addEventListener('blur', () => {
    const nomeValue = nome.value.trim();
    
        if (nomeValue.length < 3) {
            labelNome.textContent = 'O nome deve ter no mínimo 3 caracteres';
            nome.focus();
        }
    });
    