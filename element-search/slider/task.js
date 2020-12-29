const sliders = document.querySelectorAll('.slider__item');
const activeClass = 'slider__item_active';
let activeIndex = 0;

const arrows = document.querySelectorAll('.slider__arrow');

Array.from(arrows).forEach(arrow => {
    const direction = arrow.classList.contains('slider__arrow_prev') ? -1 : 1;

    arrow.onclick = () => {
        changeSlide(direction);
    }
})

changeSlide = (direction) => {
    sliders[activeIndex].classList.remove(activeClass);

    activeIndex = activeIndex + direction;
    if (activeIndex > sliders.length - 1) {
        activeIndex = 0;
    }

    if (activeIndex < 0) {
        activeIndex = sliders.length - 1;
    }

    sliders[activeIndex].classList.add(activeClass);
}