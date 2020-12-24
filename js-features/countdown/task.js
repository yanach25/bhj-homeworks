const timer = document.getElementById('timer');
let initValue = +timer.innerText;
const interval = setInterval(() => {
    initValue--;
    if (initValue >= 0) {
        timer.innerText = initValue;
    } else {
        clearInterval(interval);
        alert('Вы победили в конкурсе')
    }
}, 1000);