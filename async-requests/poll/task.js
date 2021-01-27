'use strict';

let xhr = new XMLHttpRequest();

xhr.onload = function() {
    const res = JSON.parse(xhr.response);

    if (xhr.status === 200) {
        const titleEl = document.querySelector('.poll__title');
        titleEl.textContent = res.data.title;
        renderButtons(res.data.answers);
    }
};

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

function renderButtons(list) {
    const answersEl = document.querySelector('.poll__answers');


    list.forEach(element => {
        const btn = getButton(element);
        answersEl.appendChild(btn);
        btn.onclick = function() {
            alert('Спасибо, ваш голос засчитан!');
        };
    });
}

function getButton(text) {
    const element = document.createElement('button');
    element.classList.add('poll__answer');
    element.textContent = text;

    return element;
}