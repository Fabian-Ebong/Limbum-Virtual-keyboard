// script.js
document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const input = document.getElementById('input');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (key.textContent === 'Space') {
                input.value += ' ';
            } else {
                input.value += key.textContent;
            }
        });
    });
});
