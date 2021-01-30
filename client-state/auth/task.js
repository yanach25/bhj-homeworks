'use strict';

const userId = localStorage.getItem('user_id');
const signinEl = document.querySelector('#signin');

if (userId) {
    showWelcome(JSON.parse(userId));
} else {
    showSubmit();
}

function showWelcome(userId) {
    const welcomeEl = document.querySelector('#welcome');
    welcomeEl.classList.add('welcome_active');
    const idEl = welcomeEl.querySelector('#user_id');
    idEl.textContent = userId;
}

function watchForm(form) {
    form.onsubmit = function() {
        const formData = new FormData(form);
        let xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status === 200) {
                processResult(JSON.parse(xhr.response));
            }
        }

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.send(formData);
        return false;
    }
}

function showSubmit() {
    signinEl.classList.add('signin_active');
    const form = document.querySelector('#signin__form');
    watchForm(form);
}

function processResult(result) {
    if (result.success) {
        localStorage.setItem('user_id', JSON.stringify(result.user_id));
        signinEl.classList.remove('signin_active');
        showWelcome(result.user_id);
    } else {
        alert("Неверный логин/пароль");
    }
}