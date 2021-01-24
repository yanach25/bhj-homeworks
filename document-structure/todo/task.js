'use strict';

const form = document.querySelector('form');
const tasksList = document.querySelector('.tasks__list');

function createTask(text) {
    const taskEl = document.createElement('div');
    taskEl.classList.toggle('task');
    taskEl.innerHTML = `
    <div class="task__title">
        ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;

    return taskEl;
}

function registerOnClick(task) {
    const link = task.querySelector('a');
    link.onclick = function(event) {
        task.remove();
    }
}

form.onsubmit = function(event) {
    event.preventDefault();
    event.stopPropagation();
    const input = this.querySelector('input');

    if (input.value) {
        const taskEl = createTask(input.value);
        tasksList.appendChild(taskEl);
        registerOnClick(taskEl);

        input.value = '';
    }
}