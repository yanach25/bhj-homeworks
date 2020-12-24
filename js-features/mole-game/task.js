const deadEl = document.getElementById('dead');
const lostEl = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadEl.innerText++;
        } else {
            lostEl.innerText++;
        }

        if (deadEl.innerText >= 10 || lostEl.innerText >= 5) {
            deadEl.innerText = 0;
            lostEl.innerText = 0;
        }
    }
}