'use strict'

const checkboxes = document.querySelectorAll('div.interests_main > ul > li > label > input');

[...checkboxes].forEach(checkbox => {
    checkbox.onclick = () => {
        const childs = checkbox.closest('label').nextElementSibling.querySelectorAll('input');

        [...childs].forEach(child => {
            child.checked = checkbox.checked;
        });
    }
})