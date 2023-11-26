function handleCheckboxClick(clickedCheckboxId, otherCheckboxId) {
 const clickedCheckbox = document.getElementById(clickedCheckboxId);
 const otherCheckbox = document.getElementById(otherCheckboxId);
  if (clickedCheckbox.checked) {
      otherCheckbox.checked = false;
  }
}


//FUNCAO DE SALVAR PERFIL
function salvarPerfil() {
    var nome = document.querySelector('input[placeholder="Nome Completo:"]').value;
    var exibicao = document.querySelector('input[placeholder="Nome de Exibição:"]').value;
    var email = document.querySelector('input[placeholder="Email Cadastrado:"]').value;
    var endereco = document.querySelector('input[placeholder="Endereço Cadastrado:"]').value;
  
    console.log("Nome: " + nome + "\n" +
                "Exibição: " + exibicao + "\n" +
                "Email: " + email + "\n" +
                "Endereço: " + endereco);
  
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
  fetch("../../json/usuarios.json")
      .then(response => response.json())
      .then(data => {
          document.getElementById('nomeInput').value = data.nome;
          document.getElementById('exibicaoInput').value = data.exibicao;
          document.getElementById('emailInput').value = data.email;
          document.getElementById('enderecoInput').value = data.endereco;
      })
      .catch(error => console.error('Erro ao carregar dados do JSON:', error));
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

  btnSave.addEventListener('click', function () {
      salvarPerfil();
  });

  btnExcluir.addEventListener('click', function () {
      var confirmacao = confirm("Tem certeza de que deseja excluir o perfil?");
      if (confirmacao) {
          excluirPerfil();
      }
  });

  // Carregar dados ao carregar a página
  carregarDadosDoJSON();
});

