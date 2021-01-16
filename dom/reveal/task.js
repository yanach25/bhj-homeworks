'use strict';

const revealList = document.querySelectorAll('.reveal');

window.addEventListener('scroll', (e) => {
    const intViewportHeight = window.innerHeight;

    [...revealList].forEach(item => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.y > -itemRect.height && itemRect.y < intViewportHeight * 2 / 3) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
});