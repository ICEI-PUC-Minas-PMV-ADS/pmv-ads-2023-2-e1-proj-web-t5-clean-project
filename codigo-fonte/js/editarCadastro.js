window.addEventListener("load", carregarDadosDoJSON);

function handleCheckboxClick(clickedCheckboxId, otherCheckboxId) {
 const clickedCheckbox = document.getElementById(clickedCheckboxId);
 const otherCheckbox = document.getElementById(otherCheckboxId);
  if (clickedCheckbox.checked) {
      otherCheckbox.checked = false;
  }
}


//FUNCAO DE SALVAR PERFIL
function salvarPerfil() {

    debugger
    var nome = document.querySelector('input[placeholder="Nome Completo:"]').value;    
    var email = document.querySelector('input[placeholder="Email Cadastrado:"]').value;
    var endereco = document.querySelector('input[placeholder="Endereço Cadastrado:"]').value;
  
    let usuariosLocal = localStorage.getItem("usuarios");
    var usuariosArmazenados = JSON.parse(usuariosLocal);

    usuariosArmazenados.forEach((usuario) => {
        if (usuario.logado) {
            usuario.nome = nome
            usuario.email = email
            usuario.endereco = endereco
        }
      });

      localStorage.setItem("usuarios", JSON.stringify(usuariosArmazenados));

    alert("Perfil salvo com sucesso!");
  }



// Função para excluir o perfil
function excluirPerfil() {
  alert("Perfil excluído com sucesso!");

  

  // Redirecionar para a página de login
  window.location.href = "/codigo-fonte/pages/cadastro/cadastro.html";
}



// Função para carregar dados do JSON
function carregarDadosDoJSON() {

    let usuariosLocal = localStorage.getItem("usuarios");
    var usuariosArmazenados = JSON.parse(usuariosLocal);

    usuariosArmazenados.forEach((usuario) => {
        if (usuario.logado) {
            document.getElementById('nomeInput').value = usuario.nome;        
            document.getElementById('emailInput').value = usuario.email;
            document.getElementById('enderecoInput').value = usuario.endereco;
        }
      });

}

// Carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');
  var btnSave = document.getElementById('btnSave');
  var btnExcluir = document.getElementById('btnExcluir');

  checkbox1.addEventListener('change', function () {
      if (checkbox1.checked) {
          checkbox2.checked = false;
      }
  });

  checkbox2.addEventListener('change', function () {
      if (checkbox2.checked) {
          checkbox1.checked = false;
      }
  });

  

  btnExcluir.addEventListener('click', function () {
      var confirmacao = confirm("Tem certeza de que deseja excluir o perfil?");
      if (confirmacao) {
          excluirPerfil();
          localStorage.removeItem("usuarios");
      }
  });

  // Carregar dados ao carregar a página
  carregarDadosDoJSON();
});
