// Función para verificar el estado de autenticación
function checkAuthentication() {
    // veo el estado de los id que quiero modificar.
    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    // si entro guardo en el localstorage el valor de true.
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    if (isAuthenticated) {
        // Si el usuario está autenticado, muestra el enlace de "Logout" y oculta el enlace de "Login"
        loginLink.style.display = "none";
        logoutLink.style.display = "block";
        localStorage.setItem('isAuthenticated', false);
    } else {
        // Si el usuario no está autenticado, muestra el enlace de "Login" y oculta el enlace de "Logout"
        loginLink.style.display = "block";
        logoutLink.style.display = "none";
        localStorage.setItem('isAuthenticated', true);
    }
}

// Función para verificar el inicio de sesión del usuario
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error-message");

    //hice un arrays de usurios y contraseñas
    
    const users = [
        { username: "juan", password: "juan123456" },
        { username: "lola", password: "lola123456" },
        { username: "paco", password: "paco123456" }
    ];

    for (const user of users) {
        if (user.username === username && user.password === password) {
            error.textContent = "";
            window.location.href = "user_page.html?user=" + user.username;
            return;
        }
    }
    error.textContent = "Usuario no registrado.";
}

  function buscarGoogle() {
            // Obtén el valor del campo de texto
            var textoABuscar = document.getElementById("buscado").value;

            // Redirige a la página de resultados de Google con la consulta de búsqueda
            window.location.href = "https://www.google.com/search?q=" + textoABuscar;
        }