let miElemento, miContenido, miRespuesta;


function enviarTexto(event){

    if(event === undefined){
        miElemento = document.getElementById('miTexto');
        miRespuesta = document.getElementById('respuesta');
    
        miContenido = miElemento.value;
        miRespuesta.innerHTML = miContenido;    
    }
    if(event.keyCode === 13){
        event.preventDefault();
        miElemento = document.getElementById('miTexto');
        miRespuesta = document.getElementById('respuesta');
    
        miContenido = miElemento.value;
        miRespuesta.innerHTML = miContenido;    
    }
}