document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.querySelector('.hover-effect');

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'yellow';
        element.style.fontWeight = 'bold';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '';
        element.style.fontWeight = '';
    });
});