/* miElemento font size: 16px */

var miElemento = document.getElementById('miParrafo'); /* miElemento: el párrafo con el texto a ampliar */
var tamanoFuente = window.getComputedStyle(miElemento, null).getPropertyValue('font-size'); /* El tamaño de la tipografía de ese párrafo */ /* tamanoFuente = 16px */

console.log(tamanoFuente);
document.getElementById('mensajeTexto').innerHTML = tamanoFuente;

function cambiarTamano(){ /* Cada vez que de clic en el texto hará lo siguiente */
    if(parseInt(tamanoFuente) <= 100){ /* Si el tamaño de la tipografía es menor a 100 */
        
        tamanoFuente = parseInt(tamanoFuente) * 2;
        /* parseInt lo que hace es cambiar un valor a puro número. */
        /* Va a tomar el tamaño de fuente y lo va a multiplicar x2. */

        tamanoFuenteCSS = tamanoFuente + 'px'; /* -> 16px */
        /* Hasta ahora el tamaño de fuente es solo número, pero CSS para el font-size no recibe solo número, por lo cuál al hacer esta operación lo que antes era solo 16, ahora es 16px */

        miElemento.style.fontSize = tamanoFuenteCSS;
        /* Agarro miElemento y le cambio el font-size por el nuevo tamaño de fuente que guardé en la variable tamanoFuenteCSS */
    
        /* tamanoFuente = window.getComputedStyle(miElemento, null).getPropertyValue('font-size');
        document.getElementById('mensajeTexto').innerHTML = tamanoFuente; */
    
    }
}