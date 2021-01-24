'use strict';

const linkList = document.querySelectorAll('.has-tooltip');

linkList.forEach(link => {
    const tooltip = document.createElement('div');
    tooltip.classList.toggle('tooltip');
    tooltip.textContent = link.title;
    link.appendChild(tooltip);

    const rect = link.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';

    link.onclick = function() {
        tooltip.classList.toggle('tooltip_active');

        return false;
    }
})