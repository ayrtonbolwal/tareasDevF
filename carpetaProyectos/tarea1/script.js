let volverAlFuturo = {nombre: 'Volver al Futuro', director: 'Robert Zemeckis', anoEstreno: 1985, isFree: 'Disponible'};
let losCazafantasmas = {nombre: 'Los Cazafantasmas', director: 'Ivan Reitman', anoEstreno: 1984, isFree: 'Disponible'};
let etExtraterrestre = {nombre: 'E.T. el Extraterrestre', director: 'Steven Spielberg', anoEstreno: 1982, isFree: 'No Disponible'};
let bladeRunner = {nombre: 'Blade Runner', director: 'Ridley Scott', anoEstreno: 1982, isFree: 'No Disponible'};
let imperioContraataca = {nombre: 'El Imperio Contraataca', director: 'Irvin Kershner', anoEstreno: 1980, isFree: 'Disponible'};


let peliculas = [volverAlFuturo, losCazafantasmas, etExtraterrestre, bladeRunner, imperioContraataa];

function seleccion(){
    miSeleccion = document.getElementById('opciones').value;
    switch (miSeleccion){
        case 'opcion1':
            imprimir(volverAlFuturo);
        break;
        case 'opcion2':
            imprimir(losCazafantasmas);
        break;
        case 'opcion3':
            imprimir(etExtraterrestre);
        break;
        case 'opcion4':
            imprimir(bladeRunner);
        break;
        case 'opcion5':
            imprimir(imperioContraataca);
        break;
        default:
            imprimir(volverAlFuturo);
        break;
    }
}

function imprimir(pelicula){
    document.getElementById('nombrePelicula').innerHTML = pelicula.nombre;
    document.getElementById('directorPelicula').innerHTML = pelicula.director;
    document.getElementById('anoPelicula').innerHTML = pelicula.anoEstreno;
    document.getElementById('disponibilidadPelicula').innerHTML = pelicula.isFree;
}