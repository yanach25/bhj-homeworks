const cookieEl = document.getElementById('cookie');

const clickerCounterEl = document.getElementById('clicker__counter');
let initValue = +clickerCounterEl.innerText;

cookieEl.onmousedown = () => {
    cookieEl.width = 220;
    initValue++;
    clickerCounterEl.innerText = initValue;
}

cookieEl.onmouseup = () => {
    cookieEl.width = 200;
}