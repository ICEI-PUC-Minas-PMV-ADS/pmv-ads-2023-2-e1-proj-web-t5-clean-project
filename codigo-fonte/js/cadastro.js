var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        if (emailInput.value === '' || passwordInput.value === '') {
            e.preventDefault(); // Impedir o envio do formulário
            alert('Por favor, preencha todos os campos.');
        }
    });
