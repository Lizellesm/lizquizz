function showLogin() {
    window.location.href = 'login.html';
}



// script.js

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'student' && password === '123') {
        alert('Login successful!');
        window.location.href = 'graad5/grade5home4.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
}

function redirectToRegister() {
    window.location.href = 'register.html';
}
