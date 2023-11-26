window.addEventListener('load', PreCarregamentoDados);

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            
        }
    }
}

function PreCarregamentoDados(){

    var storage = localStorage.getItem("primeiraExec");
    var primeiraExecucao = JSON.parse(storage);

    if(!primeiraExecucao)
    {
        fetch("../../json/usuarios.json")
        .then(Response=> Response.json())
        .then(usuarios=> {        
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            localStorage.setItem("primeiraExec", JSON.stringify(true));
        })
    }
}