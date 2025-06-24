var resultado = document.getElementById("resultado");
var imagen = document.getElementById("coin");
var shadow = document.getElementById("shadow");
function numeroRandom(){
    let lanzada = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if(lanzada == 1){
        resultado.innerHTML = ("Tails");
        imagen.setAttribute("src","asset/img/tails.svg")
        shadow.setAttribute("src","asset/img/shadow.svg")
    }
    else{
        resultado.innerHTML = ("Heads");
        imagen.setAttribute("src","asset/img/heads.svg")
        shadow.setAttribute("src","asset/img/shadow.svg")
    }
 
}