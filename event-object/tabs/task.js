const tabs = document.querySelectorAll('.tab');
const tabContentList = document.querySelectorAll('.tab__content');

[...tabs].forEach((tab, index) => {
    tab.onclick = () => {
        const activeIndex = [...tabs].findIndex(item => item.classList.contains('tab_active'));
        tabs[activeIndex].classList.toggle('tab_active');
        tabContentList[activeIndex].classList.toggle('tab__content_active');

        tab.classList.toggle('tab_active');
        tabContentList[index].classList.toggle('tab__content_active');
    }
})