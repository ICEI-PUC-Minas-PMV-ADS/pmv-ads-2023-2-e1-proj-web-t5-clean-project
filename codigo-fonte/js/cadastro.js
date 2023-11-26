
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");
const body = document.querySelector("body");

const eyeIcons = document.querySelectorAll('.eyeIcon');

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

    const users = JSON.parse(localStorage.getItem('usuarios')) || [];

    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
        alert(`Bem-vindo, ${user.nome || user.email}! Login bem-sucedido.`);
        setTimeout(function () {
            window.location.href = '../../pages/home/index.html';
        }, 1000);
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}

function cadastrar() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha1').value.trim();
    const confirmarSenha = document.getElementById('confirmSenha').value.trim();

    if (email === '' || senha === '' || confirmarSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação para verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, insira senhas iguais.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o email já está cadastrado
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert('Este email já está cadastrado. Por favor, utilize outro email.');
        return;
    }

    // Criar um novo usuário
    const novoUsuario = {
        email,
        senha
    };

    // Adicionar o novo usuário à lista existente
    users.push(novoUsuario);

    // Atualizar o localStorage com a lista atualizada de usuários
    localStorage.setItem('usuarios', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');

    // Redirecionar para a página de login ou para outra página após o cadastro
    window.location.href = '../../pages/home/index.html';
}
