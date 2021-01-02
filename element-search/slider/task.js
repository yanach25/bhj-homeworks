const sliders = document.querySelectorAll('.slider__item');

const arrows = document.querySelectorAll('.slider__arrow');

Array.from(arrows).forEach(arrow => {
    const direction = arrow.classList.contains('slider__arrow_prev') ? -1 : 1;

    arrow.onclick = () => {
        changeSlide(direction);
    }
})

changeSlide = (direction) => {
    const activeClass = 'slider__item_active';
    let activeIndex = Array.from(sliders).findIndex(slider => slider.classList.contains(activeClass));
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