const divContenedor = document.querySelector(".contenedor");

divContenedor.addEventListener("click", () => {
    alert("Hola! Soy el div");
});

function saludar(event) {
    event.stopPropagation();
    alert("HOLA");
} 