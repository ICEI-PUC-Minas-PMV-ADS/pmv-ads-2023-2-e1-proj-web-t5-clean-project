// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo realiza as operações de CRUD a partir de uma API baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para fazer o seu servidor, acesse o projeto do JSONServer no Replit, faça o 
// fork do projeto e altere o arquivo db.json para incluir os dados do seu projeto.
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//
// Autor: Rommel Vieira Carneiro
// Data: 03/10/2023

// URL da API JSONServer - Substitua pela URL correta da sua API
const apiUrl = 'https://imggallery--irdiniz.repl.co/images'; 

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readImage(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler imagens via API JSONServer:', error);
            displayMessage("Erro ao ler imagens");
        });
}

function createImage(image, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(image),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Imagem inserida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir imagem via API JSONServer:', error);
            displayMessage("Erro ao inserir imagem >>>>>>>");
        });
}

function updateImage(id, image, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(image),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Imagem alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar imagem via API JSONServer:', error);
            displayMessage("Erro ao atualizar imagem");
        });
}

function deleteImage(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Imagem removida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover imagem via API JSONServer:', error);
            displayMessage("Erro ao remover imagem");
        });
}
