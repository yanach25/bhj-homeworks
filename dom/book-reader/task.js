'use strict';

const container = document.querySelector('.book');

const linkList = document.querySelectorAll('a');

const options = {
    size: {
        prefix: 'book_fs',
        activeClass: 'font-size_active',
        small: 'book_fs-small',
        medium: 'book_fs-medium',
        big: 'book_fs-big',
    },
    textColor: {
        prefix: 'book_color',
        activeClass: 'color_active',
        black: 'book_color-black',
        gray: 'book_color-gray',
        whitesmoke: 'book_color-whitesmoke',
    },
    bgColor: {
        prefix: 'book_bg',
        activeClass: 'color_active',
        black: 'book_bg-black',
        gray: 'book_bg-gray',
        white: 'book_bg-white'
    }
};

const getClassName = (className, prefix) => {
    const classNameAsArray = className.split(' ');

    return classNameAsArray.find(item => item.includes(prefix));
}

const processLink = (link) => {
    const parent = link.closest('.book__control');
    const optionKey = Object.keys(link.dataset)[0];
    parent
        .querySelector(`.${options[optionKey].activeClass}`)
        .classList
        .toggle(options[optionKey].activeClass);

    link.classList.toggle(options[optionKey].activeClass);

    const classWithPrefix = options[optionKey].prefix;

    const prevClass = getClassName(container.className.toString(), classWithPrefix);

    if (prevClass) {
        container.classList.remove(prevClass);
    }
    container.classList.add(options[optionKey][link.dataset[optionKey]]);
}

[...linkList].forEach(link => {
    link.onclick = () => {
        processLink(link);

        return false;
    }
})