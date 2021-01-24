'use strict';

const products = document.querySelectorAll('.product');
const cardProducts = document.querySelector('.cart__products');

function processControl(controlEl, valueEl) {
    const controlValue = controlEl.textContent.trim();

    let incDec = controlValue === '+' ? 1 : -1;

    let counter = +(valueEl.textContent.trim());
    counter = counter + incDec;
    if (counter < 1) {
        counter = 1;
    }
    valueEl.textContent = counter;
}

function updateProduct(el, counter) {
    const counterEl = el.querySelector('.cart__product-count');
    const val = +counterEl.textContent.trim();

    counterEl.textContent = val + counter;
}

function addProduct(id, img, count) {
    const productEl = document.createElement('div');
    productEl.classList.add('cart__product');
    productEl.dataset.id = id;
    productEl.innerHTML = `
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${count}</div>
    `;

    cardProducts.appendChild(productEl);
}

function manageProduct(id, img, count) {
    const cards = cardProducts.querySelectorAll('.cart__product');

    const productEl = [...cards].find(item => item.dataset.id === id);

    if (productEl) {
        updateProduct(productEl, count);
    } else {
        addProduct(id, img, count);
    }
}

products.forEach(productEl => {
    const controls = productEl.querySelectorAll('.product__quantity-control');
    const valueEl = productEl.querySelector('.product__quantity-value');

    controls.forEach(controlEl => {
        controlEl.onclick = function() {
            processControl(controlEl, valueEl);
        }
    })

    const addBtn = productEl.querySelector('.product__add');
    addBtn.onclick = function() {
        const id = productEl.dataset.id;

        const imgEl = productEl.querySelector('img');
        const img = imgEl.src;

        const count = +(valueEl.textContent.trim());

        manageProduct(id, img, count);
    }
})