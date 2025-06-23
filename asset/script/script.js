var resultado = document.getElementById("resultado");
var imagen = document.getElementById("coin");
function numeroRandom(){
    let lanzada = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if(lanzada == 1){
        resultado.innerHTML = ("Tails");
        imagen.setAttribute("src",)
    }
    else{
        resultado.innerHTML = ("Heads");
        imagen.setAttribute("src",)
    }
 
}