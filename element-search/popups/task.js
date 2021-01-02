const modalEl = document.getElementById('modal_main');

modalEl.classList.add('modal_active');

const btnEl = document.getElementsByClassName('show-success')[0];

btnEl.onclick = () => {

    const showSuccessModalEl = document.getElementById('modal_success');
    modalEl.classList.remove('modal_active');
    showSuccessModalEl.classList.add('modal_active');
}

const closeBtnList = document.getElementsByClassName('modal__close_times');

Array.from(closeBtnList).forEach(closeBtn => {
    closeBtn.onclick = () => {
        const active = closeBtn.closest('.modal_active');
        active.classList.remove('modal_active');
    }
})