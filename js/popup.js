const seenPopup = "false";
const popupElement = document.getElementsByClassName("popup")[0];

const toggleElement = (target) => target.classList.toggle("visible");

const popupShown = () => {
    if (!sessionStorage.getItem(seenPopup)) {
    setInterval(() => {
      if (scrollPercent >= 20 && !sessionStorage.getItem(seenPopup)) {
        toggleElement(popupElement);
        sessionStorage.setItem(seenPopup, true);
      }
    }, 1000);

    setTimeout(() => {
      if (!sessionStorage.getItem(seenPopup)) {
        toggleElement(popupElement);
        sessionStorage.setItem(seenPopup, true);
      }
    }, 5000);

    const elements = [].concat(
      Array.from(document.getElementsByClassName("popup__background")),
      Array.from(document.getElementsByClassName("popup__content__exit"))
    );

    elements.forEach((element) => {
      element.addEventListener("click", () => {
        toggleElement(popupElement);
        sessionStorage.setItem(seenPopup, true);
        console.log(window.over20);
      });
    });
  } else {
    return;
  }
};

popupShown();
