const menuToggle = document.querySelector('.menu-toggle-label')
const body = document.querySelector('.toggle-scoll')

menuToggle.addEventListener('click', e => {
    menuToggle.classList.toggle('change')
    body.toggleAttribute('disabled')



})