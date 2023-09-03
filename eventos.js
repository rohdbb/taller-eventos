const boton = document.getElementById("saludarButton");

boton.addEventListener("click", function (event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert("Hola!");
});
const divElement = document.querySelector("div");

divElement.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
