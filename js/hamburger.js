
let burgerButton = document.getElementsByClassName('navbar__menu')[0]
let burgerMenu = document.getElementsByClassName('navbar__list')[0]


burgerButton.addEventListener("click", () => {
    toggleElement(burgerMenu)
    burgerButton.innerHTML = burgerButton.innerHTML === '☰' ? '✕' : '☰';

    console.log('mondongo')
})