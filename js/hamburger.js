

let burgerButton = document.getElementsByClassName('navbar__menu')[0]
let burgerMenu = document.getElementsByClassName('navbar__list')[0]    
let whyItem = document.getElementById('why')
let benefitItem = document.getElementById('benefit')
let pricesItem = document.getElementById('prices')
let contactItem = document.getElementById('contact')


burgerButton.addEventListener("click", () => {
toggleElement(burgerMenu)
burgerButton.innerHTML = burgerButton.innerHTML === '☰' ? '✕' : '☰'
if (window.matchMedia("(min-width: 700px)").matches) {
 console.log("damn")   
}
})

whyItem.addEventListener('click', () => window.scrollTo({
    top: 850,
    behavior: 'smooth',
  }));

benefitItem.addEventListener('click', () => window.scrollTo({
    top: 1200,
    behavior: 'smooth',
  }));

  pricesItem.addEventListener('click', () => window.scrollTo({
    top: 2300,
    behavior: 'smooth',
  }));

  contactItem.addEventListener('click', () => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  }));