const seenPopup = "popupShown";

const toggleElement = (target) => 
    target.classList.toggle('visible');

if (!sessionStorage.getItem(seenPopup)) {
    setInterval(function () {
        if (window.over20 == true && !sessionStorage.getItem(seenPopup)) {
        toggleElement(document.getElementsByClassName("popup")[0])
        sessionStorage.setItem(seenPopup, true)
        console.log('hi')
    }}, 1000)
    
    setTimeout(() => {
        if (!sessionStorage.getItem(seenPopup)) {
        toggleElement(document.getElementsByClassName("popup")[0])
        }
    }, 5000)

    const elements = [].concat(
        Array.from(document.getElementsByClassName("popup__background")),
        Array.from(document.getElementsByClassName("popup__content__exit"))
    );
    
    elements.forEach(element => {
        element.addEventListener("click", () => {
            toggleElement(document.getElementsByClassName("popup")[0])
            sessionStorage.setItem(seenPopup, true)
            console.log(window.over20)
        })
    }) }else {
    console.log("Popup already shown before. Not showing again.");
}

