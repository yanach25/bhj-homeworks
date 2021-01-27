'use strict';

const progress = document.getElementById('progress');
const formEl = document.getElementById('form');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    progress.value = 0;

    let xhr = new XMLHttpRequest();

    const input = document.querySelector('input');
    const file = input.files[0];
    const formData = new FormData();
    formData.append('test', file);

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
});