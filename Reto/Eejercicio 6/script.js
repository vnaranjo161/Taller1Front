document.addEventListener('DOMContentLoaded', function () {
    const nameUser = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registerBtn = document.getElementById('registerBtn');
    const result = document.getElementById('result');

    registerBtn.addEventListener('click', register);
    function register() {

        const name = nameUser.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        result.textContent = '';

        if (!name || !email || !password || !confirmPassword) {
            result.style.color = 'red';
            result.textContent = 'Por favor llene todos los campos';
        } else if (email.indexOf('@') === -1) {
            result.style.color = 'red';
            result.textContent = 'El correo debe contener un símbolo "@"';
        } else if (email.indexOf('@') != email.lastIndexOf('@')) {
            result.style.color = 'red';
            result.textContent = 'El correo no debe de tener más de un "@"';
        } else if (password !== confirmPassword) {
            result.style.color = 'red';
            result.textContent = 'Las contraseñas no coinciden, por favor vuelva a ingresarlas.';
        } else if (name.length < 2) {
            result.style.color = 'red';
            result.textContent = 'El nombre debe tener al menos 2 caracteres.';
        } else  {
            result.style.color = 'black';
            result.textContent = 'Registro exitoso';
        }
    }
});
