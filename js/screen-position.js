window.over20 = false

window.addEventListener('scroll', scrollPosition = () => {
    let scrolled = window.scrollY
    if (scrolled >= document.body.offsetHeight/5) {
        over20 = true
    } else {
        over20 = false
    }
});
