'use strict';

const DONE = 'modal=done';

const modalEl = document.querySelector('#subscribe-modal');

const cookie = document.cookie;

const parths = cookie.split(';');

const modalDone = parths.some(item => item.trim() === DONE);

if (!modalDone) {
    modalEl.classList.add('modal_active');

    const button = modalEl.querySelector('.modal__close');
    button.onclick = function() {
        document.cookie = DONE;
        modalEl.classList.remove('modal_active');

        return false;
    }
}