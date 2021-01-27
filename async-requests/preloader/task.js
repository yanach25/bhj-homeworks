'use strict';

let xhr = new XMLHttpRequest();

xhr.onload = function() {
    const res = JSON.parse(xhr.response);

    if (xhr.status === 200) {
        const loader = document.querySelector('#loader');
        loader.classList.toggle('loader_active');
        renderList(res.response.Valute);
    }
};

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

function renderList(valutes) {
    const items = document.querySelector('#items');
    Object.keys(valutes).forEach(key => {
        const el = getItem(key, valutes[key]);
        items.appendChild(el);
    })

}

function getItem(key, valute) {
    const el = document.createElement('div');
    el.classList.add('item');
    el.innerHTML = `
                <div class="item__code">
                    ${key}
                </div>
                <div class="item__value">
                    ${valute.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
    `;

    return el;
}