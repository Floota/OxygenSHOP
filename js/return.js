
document.getElementsByClassName("return__button")[0].addEventListener("click", () => {
    setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
            })
    }) , 200
})

setInterval(() => {
    if (scrollPercent >= 30) {
        document.getElementsByClassName("return")[0].classList.add("visible")
    } else {
        document.getElementsByClassName("return")[0].classList.remove("visible")
    }
}, 1500)