
let return__button = document.getElementsByClassName("return__button")[0]

return__button.addEventListener("click", () => {
    setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
            })
    }) , 200
})