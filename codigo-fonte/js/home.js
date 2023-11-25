class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            
        }
    }
}

//função aparecer enviar notificacao
function aparecerEnviarNotificacao() {
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