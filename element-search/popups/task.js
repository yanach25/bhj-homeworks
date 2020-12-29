const modalEl = document.getElementById('modal_main');

modalEl.classList.add('modal_active');

const btnEl = document.getElementsByClassName('show-success')[0];

btnEl.onclick = () => {

    const showSuccessModalEl = document.getElementById('modal_success');
    showSuccessModalEl.classList.add('modal_active');
}