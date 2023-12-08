
let count = 1;
document.getElementById("radio1").checked = true;

//Set interval para ficar passando infinitamente o slide
setInterval(function(){
    nextImage(); //Função sendo chamada de 2 em 2 segundos
}, 5000)

// Função para ficar passando as imagens
function nextImage(){
    count = count+1;
    if(count > 4){// 4 pois so fizemos com 4 imagens{
        count = 1;
    }

    //Radio + count pois é o número de qual imagem está passando no momento
document.getElementById("radio"+count).checked = true;
}