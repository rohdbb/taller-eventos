document.getElementById("saludarButton").onclick = function () {
    alert("Hola!");
};

const divElement = document.querySelector("div");

divElement.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
