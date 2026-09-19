// Futuras funciones
const password = document.getElementById("password");
const boton = document.getElementById("mostrar");

boton.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        boton.textContent = "Ocultar"

    } else {
        password.type = "password";
        boton.textContent = "Mostrar";
    }
});