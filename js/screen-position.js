
    let stickyElement = document.getElementsByClassName("scroll__bar")[0];
    let scrollPercent = 0
    window.addEventListener('scroll', scrollPosition = () => {
        scrolled = window.scrollY
        scrollPercent = (scrolled / (document.body.scrollHeight - window.innerHeight) * 100)
    })
    window.scrollDown = this.scrollPercent

