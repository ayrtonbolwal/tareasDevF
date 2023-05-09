document.addEventListener("DOMContentLoaded", function () {
  let btnVerify = document.getElementById("btnVerify");
  let btnChangeNumber = document.getElementById("changeNumber");
  let finalMessage = document.getElementById("finalMessage");
  let variableNumber;

  let i = 0;
  let messageDown = 0;
  let messageUp = 0;
  randomNumber();

  function randomNumber() {
    variableNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(variableNumber);

    if (i != 0) {
      finalMessage.textContent = "Se ha creado un nuevo número 🙀";
    } else {
      finalMessage.textContent = "Adivina el número si puedes 🐱‍👤";
    }
  }

  function compareVariables() {
    let userNumber = document.getElementById("userNumber").value;

    if (userNumber == variableNumber) {
      finalMessage.textContent = "🎊 Acertaste 😼 🎊";
      btnVerify.disabled = true;
    } else {
      if (userNumber < variableNumber) {
        if (messageDown == 0) {
          finalMessage.textContent = "Estás abajo 👎";
          messageDown = 1;
        } else {
          finalMessage.textContent = "Tienes que subir más 🙄";
          messageDown = 0;
        }
      } else {
        if (messageUp == 0) {
          finalMessage.textContent = "Estas arriba 👍";
          messageUp = 1;
        } else {
          finalMessage.textContent = "Sigues arriba 😸";
          messageUp = 0;
        }
      }
    }
  }

  btnVerify.addEventListener("click", compareVariables);
  btnChangeNumber.addEventListener("click", randomNumber);
});
