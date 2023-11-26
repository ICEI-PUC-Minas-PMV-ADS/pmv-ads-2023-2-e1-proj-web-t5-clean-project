window.addEventListener("load", trocarCadastrarPorSair);

//  Transição
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.querySelector("body");

const eyeIcons = document.querySelectorAll(".eyeIcon");


//  Transição
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
  debugger;
  const email = document.getElementById("email2").value.trim();
  const senha = document.getElementById("senha2").value.trim();

  let usuariosLocal = localStorage.getItem("usuarios");
  var usuariosArmazenados = JSON.parse(usuariosLocal);

  var usuarioEncontrado;
  var nomeUsuario;

  usuariosArmazenados.forEach((usuario) => {
    if (usuario.email == email && usuario.senha == senha) {
      usuario.logado = true;
      usuarioEncontrado = true;
      nomeUsuario = usuario.nome;
    }
  });

  if (usuarioEncontrado) {
    localStorage.setItem("usuarios", JSON.stringify(usuariosArmazenados));

    alert(`Bem-vindo, ${usuario.nome}! Login bem-sucedido.`);

    location.href = "../home/index.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    logado: false,
    cep:null,
    endereco:null
  };

  let usuarios = localStorage.getItem("usuarios");
  usuarios = usuarios ? JSON.parse(usuarios) : [];

  usuarios.push(novoUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  trocarCadastrarPorSair();
  window.location.href = "../../pages/home/index.html";
}

//função para sair tela inical
function trocarCadastrarPorSair() {
  let usuarioLogado = localStorage.getItem("usuarios");

  const containerCadastro = document.getElementById("login");

  if (usuarioLogado != null) {
    var usuariosArmazenados = JSON.parse(usuarioLogado);

    usuariosArmazenados.forEach((usuario) => {
      if (usuario.logado) {
        containerCadastro.innerHTML = ` <div>

        <button onclick="Notificacao()">Enviar Notificação</button>
      </div><span> <span class="ola">Olá! Bem-vindo(a) ${usuario.nome} <br></span><br><a href="../home/index.html" class="cadastro" onclick="deslogarUsuario()">Sair</a></span>`;
      }
    });
  } else {
    containerCadastro.innerHTML =
      '<span><span class="ola">Olá!</span><br>Faça seu <a href="../cadastro/cadastro.html" class="cadastro">cadastro</a> para receber <br>notificações sobre a coleta seletiva da sua rua</span>';
  }
}

//função limpar registro de usuario
function deslogarUsuario() {
  let usuarioLogado = localStorage.getItem("usuarios");

  if (usuarioLogado != null) {
    var usuariosArmazenados = JSON.parse(usuarioLogado);

    usuariosArmazenados.forEach((usuario) => {
      if (usuario.logado) {
        usuario.logado = false;
      }
    });
    localStorage.setItem("usuarios", JSON.stringify(usuariosArmazenados));
  }
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

  if (inputSenha.getAttribute("type") === "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
}
const inputSenha = document.getElementById(inputId);

if (inputSenha.getAttribute("type") === "password") {
  inputSenha.setAttribute("type", "text");
} else {
  inputSenha.setAttribute("type", "password");
}

//LOGIN Usuário
/*
function logar() {
  const email = document.getElementById("email2").value.trim();
  const senha = document.getElementById("senha2").value.trim();

  const users = JSON.parse(localStorage.getItem("usuarios")) || [];

  const user = users.find((u) => u.email === email && u.senha === senha);

  if (user) {
    alert(`Bem-vindo, ${user.nome || user.email}! Login bem-sucedido.`);
    setTimeout(function () {
      window.location.href = "../../pages/home/index.html";
    }, 1000);
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
}*/


function cadastrar() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha1").value.trim();
  const confirmarSenha = document.getElementById("confirmSenha").value.trim();

  if (email === "" || senha === "" || confirmarSenha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação para verificar se as senhas coincidem
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, insira senhas iguais.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se o email já está cadastrado
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    alert("Este email já está cadastrado. Por favor, utilize outro email.");
    return;
  }

  // Criar um novo usuário
  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    logado: false,
    cep:null,
    endereco:null
  };

  // Adicionar o novo usuário à lista existente
  users.push(novoUsuario);

  // Atualizar o localStorage com a lista atualizada de usuários
  localStorage.setItem("usuarios", JSON.stringify(users));

  alert("Cadastro realizado com sucesso!");


  // Redirecionar para a página de login ou para outra página após o cadastro
}
