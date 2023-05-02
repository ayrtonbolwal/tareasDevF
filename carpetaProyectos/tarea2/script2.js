/* Declaración de Objetos */

let volverAlFuturo = {nombre: 'Volver al Futuro', director: 'Robert Zemeckis', anoEstreno: 1985, isFree: 'Disponible', precio: 30.00};
let losCazafantasmas = {nombre: 'Los Cazafantasmas', director: 'Ivan Reitman', anoEstreno: 1984, isFree: 'Disponible', precio: 30.00};
let etExtraterrestre = {nombre: 'E.T. el Extraterrestre', director: 'Steven Spielberg', anoEstreno: 1982, isFree: 'No Disponible', precio: 30.00};
let bladeRunner = {nombre: 'Blade Runner', director: 'Ridley Scott', anoEstreno: 1982, isFree: 'No Disponible', precio: 30.00};
let imperioContraataca = {nombre: 'El Imperio Contraataca', director: 'Irvin Kershner', anoEstreno: 1980, isFree: 'Disponible', precio: 30.00};

/* Declaración de Arreglo */
/* El arreglo guarda los objetos que creamos arriba. */
let peliculas = [volverAlFuturo, losCazafantasmas, etExtraterrestre, bladeRunner, imperioContraataca];


/* Mensaje en ventanita para ingresar datos:  */
let pelicula = prompt('Ingrese el numero de alguna de las siguientes películas: 1 Volver al Futuro | 2 Los Cazafantasmas | 3 ET El Extraterrestre | 4 Blade Runner | 5 El Imperio Contraataca:');

/* Mensaje de regreso:  */
switch (pelicula){
    case '1': /* En el caso de que pelicula sea igual a '1' entonces mandamos el alert: */
        alert('Es de Robert Zemeckis y la tenemos: ' + peliculas[0].isFree + ' y el precio es: $' + peliculas[0].precio);
    break;
    case '2':
        alert('Es de Ivan Reitman y la tenemos: ' + peliculas[1].isFree + ' y el precio es: $' + peliculas[1].precio);
    break;
    case '3':
        alert('Es de Steven Spielberg y la tenemos: ' + peliculas[2].isFree + ' y el precio es: $' + peliculas[2].precio);
    break;
    case '4':
        alert('Es de Ridley Scott y la tenemos: ' + peliculas[3].isFree + ' y el precio es: $' + peliculas[3].precio);
    break;
    case '5':
        alert('Es de Irvin Kershner y la tenemos: ' + peliculas[4].isFree + ' y el precio es: $' + peliculas[4].precio);
    break;
    default:
        alert('Opcion Incorrecta');
    break;
}


