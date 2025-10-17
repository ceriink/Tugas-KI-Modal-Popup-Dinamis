const openmodal = document.querySelector('.open-modal');
const overlay = document.querySelector('.overlay');
const closemodal = document.querySelector('.close-modal');

openmodal.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closemodal.addEventListener('click', () => {
    overlay.style.display = 'none';
    openmodal.style.display = 'none';
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
    overlay.style.display = 'none';
    openmodal.style.display = 'none';
    }
});