//  Transição
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");

const body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

//Validação 
const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        if (emailInput.value === '' || passwordInput.value === '') {
            e.preventDefault(); 
            alert('Por favor, preencha todos os campos.');
        }
    }
)

function logar(){
    const login = document.getElementById('Login').value;
    const senha = document.getElementById('Senha').value;

    fetch('../../json/usuários.json')
    .then(response =>{
        if(!response.ok){
            throw new Error ('Erro ao carregar usuário');
        }
        return response.json();
    })

    .then(usuarios => {
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === login && usuario.senha === senha);

        if (usuarioEncontrado){
            alert('Sucesso!');
            location.href = '../home/index.html'
        } else {
            alert('Usuário ou senha incorretos!')
        }
    })

    .catch(error => console.error('Erro:', error));
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha,
    };

    let usuarios = localStorage.getItem('usuarios');
    usuarios = usuarios ? JSON.parse(usuarios) : [];

    usuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    window.location.href = '../home/index.html';
}


const formCadastro = document.querySelector('.form');


formCadastro.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    
    cadastrarUsuario(nome, email, senha);

    alert('Usuário cadastrado com sucesso!');
});
