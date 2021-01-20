'use strict';

const chatWidgetEl = document.querySelector('.chat-widget');

chatWidgetEl.onclick = function() {
    this.classList.add('chat-widget_active');
}

const inputEl = document.querySelector('.chat-widget__input');

const answers = [
    'отстань',
    'не сегодня',
    'мы никогда не доступны',
    'клиенты отстой',
]

const generateAnswer = () => {
    return answers[getRandomInt(0, answers.length)];
}

const getHTML = (text) => {
    const date = new Date();
    return `
    <div class="message ${text ? 'message_client': ''}">
      <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
      <div class="message__text">
        ${text ? text: generateAnswer()}
      </div>
    </div>
  `
}

inputEl.onkeyup = function(event) {
    if (event.key === 'Enter') {
        const value = event.target.value;

        if (value) {

            const messages = document.querySelector('.chat-widget__messages');

            messages.innerHTML += getHTML(value);
            inputEl.value = '';

            messages.innerHTML += getHTML();
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}