

let burgerButton = document.getElementsByClassName('navbar__menu')[0]
let burgerMenu = document.getElementsByClassName('navbar__list')[0]    
let whyItem = document.getElementById('why')

burgerButton.addEventListener("click", () => {
toggleElement(burgerMenu)
burgerButton.innerHTML = burgerButton.innerHTML === '☰' ? '✕' : '☰'
})

