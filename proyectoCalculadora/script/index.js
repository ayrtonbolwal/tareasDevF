document.addEventListener("DOMContentLoaded", function () {
  let numberOne = document.getElementById("numberOne");
  let numberTwo = document.getElementById("numberTwo");
  let numberThree = document.getElementById("numberThree");
  let numberFour = document.getElementById("numberFour");
  let numberFive = document.getElementById("numberFive");
  let numberSix = document.getElementById("numberSix");
  let numberSeven = document.getElementById("numberSeven");
  let numberEight = document.getElementById("numberEight");
  let numberNine = document.getElementById("numberNine");
  let numberZero = document.getElementById("numberZero");

  let btnSuma = document.getElementById("suma");
  let btnResta = document.getElementById("resta");
  let btnDivision = document.getElementById("division");
  let btnMultiplicacion = document.getElementById("multiplicacion");
  let btnBorrar = document.getElementById("borrarElemento");
  let btnBorrarTodo = document.getElementById("borrarTodo");

  let btnIgual = document.getElementById("igual");

  let screenDisplay = document.getElementById("screenDisplay");
  let resultDisplay = document.getElementById("resultDisplay");
  let showArray = "";

  let arrayDisplay = [];
  let resultado;
  let resultadoFinal = false;
  let operacion = '';

  bloquearBotonBorrar();

  function insertOne() {
    arrayDisplay.push(1);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertTwo() {
    arrayDisplay.push(2);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertThree() {
    arrayDisplay.push(3);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertFour() {
    arrayDisplay.push(4);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertFive() {
    arrayDisplay.push(5);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertSix() {
    arrayDisplay.push(6);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertSeven() {
    arrayDisplay.push(7);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertEight() {
    arrayDisplay.push(8);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertNine() {
    arrayDisplay.push(9);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }
  function insertZero() {
    arrayDisplay.push(0);
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }

  function operacionSuma() {
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);

    if(resultadoFinal == false){
        resultadoFinal = resultado;
    } else {
        if (operacion == 'suma'){
            resultadoFinal = resultadoFinal + resultado;
        }
        if (operacion == 'resta'){
            resultadoFinal = resultadoFinal - resultado;
        }
        if (operacion == 'multiplicacion'){
            resultadoFinal = resultadoFinal * resultado;
        }
        if (operacion == 'division'){
            resultadoFinal = resultadoFinal / resultado;
        }
    }
    resultDisplay.textContent = resultadoFinal;
    operacion = 'suma';
    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
    bloquearBotonBorrar();
  }

  function operacionResta(){
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);

    if(resultadoFinal == false){
        resultadoFinal = resultado;
    } else {
        if (operacion == 'suma'){
            resultadoFinal = resultadoFinal + resultado;
        }
        if (operacion == 'resta'){
            resultadoFinal = resultadoFinal - resultado;
        }
        if (operacion == 'multiplicacion'){
            resultadoFinal = resultadoFinal * resultado;
        }
        if (operacion == 'division'){
            resultadoFinal = resultadoFinal / resultado;
        }
    }
    resultDisplay.textContent = resultadoFinal;
    operacion = 'resta';
    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
    bloquearBotonBorrar();
  }
  
  function operacionMultiplicacion(){
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);

    if(resultadoFinal == false){
        resultadoFinal = resultado;
    } else {
        if (operacion == 'suma'){
            resultadoFinal = resultadoFinal + resultado;
        }
        if (operacion == 'resta'){
            resultadoFinal = resultadoFinal - resultado;
        }
        if (operacion == 'multiplicacion'){
            resultadoFinal = resultadoFinal * resultado;
        }
        if (operacion == 'division'){
            resultadoFinal = resultadoFinal / resultado;
        }
    }
    resultDisplay.textContent = resultadoFinal;
    operacion = 'multiplicacion';
    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
    bloquearBotonBorrar();
  }

  function operacionDivision(){
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);

    if(resultadoFinal == false){
        resultadoFinal = resultado;
    } else {
        if (operacion == 'suma'){
            resultadoFinal = resultadoFinal + resultado;
        }
        if (operacion == 'resta'){
            resultadoFinal = resultadoFinal - resultado;
        }
        if (operacion == 'multiplicacion'){
            resultadoFinal = resultadoFinal * resultado;
        }
        if (operacion == 'division'){
            resultadoFinal = resultadoFinal / resultado;
        }
    }
    resultDisplay.textContent = resultadoFinal;
    operacion = 'division';
    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
    bloquearBotonBorrar();
  }

  function bloquearBotonBorrar(){
    if(arrayDisplay.length == 0){
        btnBorrarTodo.disabled = true;
        btnBorrar.disabled = true;
        btnIgual.disabled = true;
    } else {
        btnBorrar.disabled = false;
        btnBorrarTodo.disabled = false;
        btnIgual.disabled = false;
    }
  }

  /* function operacionSuma() {
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);
    if (resultadoFinal == false) {
      resultadoFinal = resultado;
      resultDisplay.textContent = resultadoFinal;
    } else {
      resultadoFinal = resultadoFinal + resultado;
      resultDisplay.textContent = resultadoFinal;
    }
    operacion = "suma";

    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
  }
  function operacionResta() {
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);
    if (resultadoFinal == false) {
      resultadoFinal = resultado;
      resultDisplay.textContent = resultadoFinal;
    } else {
      resultadoFinal = resultadoFinal - resultado;
      resultDisplay.textContent = resultadoFinal;
    }
    operacion = "resta";

    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
  }
  function operacionDivision() {
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);
    if (resultadoFinal == false) {
      resultadoFinal = resultado;
      resultDisplay.textContent = resultadoFinal;
    } else {
      resultadoFinal = resultadoFinal / resultado;
      resultDisplay.textContent = resultadoFinal;
    }
    operacion = "division";

    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
  }
  function operacionMultiplicacion() {
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);
    if (resultadoFinal == false) {
      resultadoFinal = resultado;
      resultDisplay.textContent = resultadoFinal;
    } else {
      resultadoFinal = resultadoFinal * resultado;
      resultDisplay.textContent = resultadoFinal;
    }
    operacion = "multiplicacion";

    arrayDisplay = [];
    screenDisplay.textContent = arrayDisplay;
  }
 */
  function operacionIgual() {
    showArray = arrayDisplay.join("");
    resultado = parseInt(showArray);

    if (operacion === "suma") {
      resultadoFinal = resultadoFinal + resultado;
    }
    if (operacion === "resta") {
      resultadoFinal = resultadoFinal - resultado;
    }
    if (operacion === "multiplicacion") {
      resultadoFinal = resultadoFinal * resultado;
    }
    if (operacion === "division") {
      resultadoFinal = resultadoFinal / resultado;
    }

    arrayDisplay = [];
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    resultDisplay.textContent = resultadoFinal;

    btnIgual.disabled = true;

    /* if ((operacion = "suma")) {
      resultadoFinal = (resultadoFinal + resultado);
    }
    if ((operacion = "resta")) {
      resultadoFinal = (resultadoFinal - resultado);
    } */
  }

  function borrarTodo(){
    arrayDisplay = [];
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }

  function borrarElemento(){
    arrayDisplay.pop();
    showArray = arrayDisplay.join("");
    screenDisplay.textContent = showArray;
    bloquearBotonBorrar();
  }

  numberOne.addEventListener("click", insertOne);
  numberTwo.addEventListener("click", insertTwo);
  numberThree.addEventListener("click", insertThree);
  numberFour.addEventListener("click", insertFour);
  numberFive.addEventListener("click", insertFive);
  numberSix.addEventListener("click", insertSix);
  numberSeven.addEventListener("click", insertSeven);
  numberEight.addEventListener("click", insertEight);
  numberNine.addEventListener("click", insertNine);
  numberZero.addEventListener("click", insertZero);

  btnSuma.addEventListener("click", operacionSuma);
  btnResta.addEventListener("click", operacionResta);
  btnDivision.addEventListener("click", operacionDivision);
  btnMultiplicacion.addEventListener("click", operacionMultiplicacion);
  btnIgual.addEventListener("click", operacionIgual);

  btnBorrarTodo.addEventListener("click", borrarTodo);
  btnBorrar.addEventListener("click", borrarElemento);
});
