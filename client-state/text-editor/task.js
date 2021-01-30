'use strict';

const textareaEl = document.querySelector('#editor');

const val = localStorage.getItem('textarea');


if (val) {
    textareaEl.value = JSON.parse(val);
}

textareaEl.onkeyup = function() {
    localStorage.setItem('textarea', JSON.stringify(textareaEl.value));
}