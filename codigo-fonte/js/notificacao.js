function Notificacao() {




  let usuariosLocal = localStorage.getItem("usuarios");
  var usuariosArmazenados = JSON.parse(usuariosLocal);

  usuariosArmazenados.forEach((usuario) => {
    if (usuario.logado) {
     
        fetch(`http://luccasdsm-001-site3.etempurl.com/coleta/rua%20berlim`)
        .then(response => response.json())
        .then(coleta => {
            window.alert(JSON.stringify(coleta));
        })
    }
  });

  alert(" O dia da sua coleta é seg, quar, sex");
}
