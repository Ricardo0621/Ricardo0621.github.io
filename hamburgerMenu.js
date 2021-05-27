const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navigation')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)