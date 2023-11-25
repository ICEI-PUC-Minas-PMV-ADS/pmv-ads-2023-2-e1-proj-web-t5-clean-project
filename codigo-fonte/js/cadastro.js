
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.querySelector("body");

const eyeIcons = document.querySelectorAll('.eyeIcon');
/* 
const nome = document.querySelector('#nome'); */
const labelNome = document.querySelector('#labelNome');

const email = document.querySelector('#email');
const labelEmail = document.querySelector('#labelEmail');

const senha1 = document.querySelector('#senha1');
const labelSenha = document.querySelector('#labelSenha1');

const confirmSenha = document.querySelector('#confirmSenha');
const labelConfirmSenha = document.querySelector('#labelConfirmSenha');

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

//cadastraar Usuário

nome.addEventListener('blur', () => {
    const nomeValue = nome.value.trim();
    
        if(nome.value.lengh <= 2){
            labelNome.innerHTML = '<strong>Nome '
        }
})