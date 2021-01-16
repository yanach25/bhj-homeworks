'use strict';

const rotatorList = document.querySelectorAll('.rotator');

const startTicker = (rotator) => {
    const rCaseList = rotator.querySelectorAll('.rotator__case');

    let activeIndex = [...rCaseList].findIndex(item => item.classList.contains('rotator__case_active'));
    const dataSet = rCaseList[activeIndex].dataset;
    rotator.style.color = dataSet.color;

    setTimeout(() => {
        rCaseList[activeIndex].classList.toggle('rotator__case_active');

        activeIndex++;
        if (activeIndex > rCaseList.length - 1) {
            activeIndex = 0;
        }

        rCaseList[activeIndex].classList.toggle('rotator__case_active');

        startTicker(rotator);
    }, +dataSet.speed);
}

[...rotatorList].forEach(rotator => {
    startTicker(rotator);
})