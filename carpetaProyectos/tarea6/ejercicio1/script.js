let miElemento = document.getElementById('body'); 
let valorBgColor;

function cambiarColor(){
    valorBgColor = miElemento.style.background;
    console.log(typeof(valorBgColor));

    if( valorBgColor != 'rgb(21, 17, 46)'){
        miElemento.style.background = 'rgb(21, 17, 46)';
    } else {
        miElemento.style.background = 'rgb(20, 20, 20)';
    }
}
