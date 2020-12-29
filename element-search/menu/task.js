const menuList = document.querySelectorAll('ul.menu_main > li');

let lastOpened;

Array.from(menuList).forEach(li => {
    const subMenu = li.querySelector('.menu_sub');

    if (subMenu) {
        li.onclick = () => {
            if (lastOpened) {
                lastOpened.classList.remove('menu_active');
            }
            subMenu.classList.add('menu_active');
            lastOpened = subMenu;
            return false;
        }
    }
})