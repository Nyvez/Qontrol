// Contraseña 1 - Mostrar/Ocultar
const password1 = document.getElementById("password1");
const boton1 = document.getElementById("mostrar1");

boton1.addEventListener("click", () => {
    if (password1.type === "password") {
        password1.type = "text";
        boton1.textContent = "Ocultar";
    } else {
        password1.type = "password";
        boton1.textContent = "Mostrar";
    }
});

// Contraseña 2 (Confirmación) - Mostrar/Ocultar
const password2 = document.getElementById("password2");
const boton2 = document.getElementById("mostrar2");

boton2.addEventListener("click", () => {
    if (password2.type === "password") {
        password2.type = "text";
        boton2.textContent = "Ocultar";
    } else {
        password2.type = "password";
        boton2.textContent = "Mostrar";
    }
});

// Validación de Registro
const form = document.querySelector(".card");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Limpiar mensaje de error
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    
    // Obtener valores
    const pass1 = password1.value;
    const pass2 = password2.value;
    const email = document.getElementById("email").value;
    const rol = document.getElementById("rol").value;
    const nombre = document.getElementById("nombre").value;
    
    // Validaciones
    if (pass1 === "" || pass2 === "" || email === "" || rol === "" || nombre === "") {
        errorMessage.textContent = "⚠️ Por favor completa todos los campos.";
        errorMessage.style.display = "block";
        return;
    }
    
    if (pass1 !== pass2) {
        errorMessage.textContent = "❌ Las contraseñas no coinciden";
        errorMessage.style.display = "block";
        return;
    }
    
    if (pass1.length < 6) {
        errorMessage.textContent = "⚠️ La contraseña debe tener al menos 6 caracteres";
        errorMessage.style.display = "block";
        return;
    }
});
