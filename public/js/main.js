import {showCloseButtonAlert, registerFunc, showCloseButtonSuccess} from './auth/register.js';
import {loginFunc} from './auth/login.js';

document.addEventListener('DOMContentLoaded', (ev) => {

    const registerForm = document.querySelector('#register').querySelector('form');

    registerForm.addEventListener('submit', (evForm) => {
        evForm.preventDefault();
        const data = new FormData(registerForm);
        if (data.get('password') !== data.get('passwordrepeat')) {
            document.querySelector('.error_message').classList.remove('d-none');
            document.querySelector('.error_message > .inner_wrapper > .text-content').innerHTML = "Passwords do not match";
            showCloseButtonAlert();
            return;
        }

        const serialized = new URLSearchParams(data).toString();
        registerFunc(serialized).then(message => {
            document.querySelector('.success_message').classList.remove('d-none');
            document.querySelector('.success_message > .inner_wrapper > .text-content').innerHTML = message;
            showCloseButtonSuccess();
        }).catch(err => {
            document.querySelector('.error_message').classList.remove('d-none');
            document.querySelector('.error_message > .inner_wrapper > .text-content').innerHTML = err.message;
            showCloseButtonAlert();
        })
    });

    const loginForm = document.querySelector('#login').querySelector('form');
    loginForm.addEventListener('submit', (form) => {
        form.preventDefault();
        const data = new FormData(loginForm);
        const serialized = new URLSearchParams(data).toString();
        loginFunc(serialized).then(message => {
            console.log(message);
            window.location.href = '/';
        }).catch(loginError => {
            console.log(loginError);
            document.querySelector('.error_message').classList.remove('d-none');
            document.querySelector('.error_message > .inner_wrapper > .text-content').innerHTML = loginError.message;
            showCloseButtonAlert();
        });
    })
});