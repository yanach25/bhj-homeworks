'use strict';

const dropdownValueList = document.getElementsByClassName('dropdown__value');

const clearListeners = (listeners) => {
    listeners.forEach(listener => {
        listener.link.removeEventListener('click', listener.listenerFn)
    });
    listeners = [];
}

Array.from(dropdownValueList).forEach(dropdownValueEl => {
    const parent = dropdownValueEl.closest('.dropdown');

    const links = parent.getElementsByClassName('dropdown__link');

    dropdownValueEl.onclick = function() {
        let listners = [];
        const ulEl = parent.querySelector('ul.dropdown__list');

        if (ulEl.classList.contains('dropdown__list_active')) {
            ulEl.classList.remove('dropdown__list_active');
            clearListeners(listners);

        } else {
            ulEl.classList.add('dropdown__list_active');

            Array.from(links).forEach(link => {
                const listenerFn = function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    ulEl.classList.remove('dropdown__list_active');
                    dropdownValueEl.textContent = event.target.textContent;
                    clearListeners(listners);
                }

                link.addEventListener('click', listenerFn);
                listners.push({ link, listenerFn });
            })
        }
    }
})