const menuList = document.querySelectorAll('ul.menu_main > li');

let lastOpened;

Array.from(menuList).forEach(li => {
    const subMenu = li.querySelector('.menu_sub');

    if (subMenu) {
        li.onclick = (event) => {
            if (!event.target.href.includes('https')) {
                if (lastOpened === subMenu) {
                    lastOpened.classList.remove('menu_active');
                    lastOpened = null;
                } else {
                    if (lastOpened) {
                        lastOpened.classList.remove('menu_active');
                    }
                    subMenu.classList.add('menu_active');
                    lastOpened = subMenu;
                }
                return false;
            }
        }
    }
})