
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.querySelector("body");

const eyeIcons = document.querySelectorAll('.eyeIcon');

/* const nome = document.querySelector('#nome');
const labelNome = document.querySelector('#labelNome');
const validNome = false

const email = document.querySelector('#email');
const labelEmail = document.querySelector('#labelEmail');
const validEmail = false

const senha1 = document.querySelector('#senha1');
const labelSenha = document.querySelector('#labelSenha1');
const validSenha1 = false


const confirmSenha = document.querySelector('#confirmSenha');
const labelConfirmSenha = document.querySelector('#labelConfirmSenha');
const validConfirmSenha = false */

//  Transição
btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

// Função para alternar a visibilidade da senha

eyeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        togglePasswordVisibility(targetId);
    });
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

//LOGIN Usuário

function logar() {
    const email = document.getElementById('email2').value.trim(); 
    const senha = document.getElementById('senha2').value.trim(); 

    fetch('../../json/usuarios.json') 
        .then(response => response.json()) 
        .then(users => {
            console.log(users); 
            const user = users.find(u => u.email.trim() === email && u.senha.trim() === senha);

            if (user) {
                alert(`Bem-vindo, ${user.nome}! Login bem-sucedido.`);
                setTimeout(function() {
                    window.location.href = '../../pages/home/index.html'; 
                }, 2000); 
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os usuários:', error);
        });
}
