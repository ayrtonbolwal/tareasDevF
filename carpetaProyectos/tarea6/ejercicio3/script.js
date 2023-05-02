var miElemento = document.getElementById('miParrafo');
var tamanoFuente = window.getComputedStyle(miElemento, null).getPropertyValue('font-size');

console.log(tamanoFuente);
document.getElementById('mensajeTexto').innerHTML = tamanoFuente;


function cambiarTamano(){
    if(parseInt(tamanoFuente) <= 100){
        tamanoFuente = parseInt(tamanoFuente) * 2;
        tamanoFuenteCSS = tamanoFuente + 'px';
        miElemento.style.fontSize = tamanoFuenteCSS;
    
        tamanoFuente = window.getComputedStyle(miElemento, null).getPropertyValue('font-size');
        document.getElementById('mensajeTexto').innerHTML = tamanoFuente;
    
    }
}