
const nameInput = document.getElementById("name__input")
const emailInput = document.getElementById("email__input")
const popupInput = document.getElementsByClassName("popup__content__input")[0]
const popupButton = document.getElementsByClassName("popup__content__send")[0]
const contactButton = document.getElementsByClassName("contact__button")[0]
const contactCheckbox = document.getElementsByClassName("contact__checkbox")[0]

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputError = (element) => {
    element.classList.add("error")
    setTimeout(() => {
        element.classList.remove("error")
        element.placeholder = ""
    }, 3000);
}
const nameValidation = (name) => {
    if (name.length <= 2 && name.length <= 100) {
        nameInput.innerHTML = ""
        inputError(nameInput)
        return false
    } else {
        return true
    }
}
const emailValidation = (email, input) => {
    if (String(email).toLowerCase().match(regex)) {
        return true
    } else {
        console.log('null')
        inputError(input)
        input.innerHTML = ""
        return false
    }
}
const checkboxCheck = (checkbox) => {
    if (checkbox.checked === true) {
        return true
    } else {
        inputError(checkbox)
        return false
    }
}
const sendData = (name, email) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: `${name}`,
          body: `${email}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
contactButton.addEventListener("click", () => {
    if (nameValidation(nameInput.value) != true) {
        nameInput.placeholder = "Nombre Incorrecto"
    } 
    if (emailValidation(emailInput.value, emailInput) != true) {
        emailInput.placeholder = "Correo Incorrecto"
    } 
    if (checkboxCheck(contactCheckbox) == true) {
        sendData(nameInput.value, emailInput.value);
    }

});
popupButton.addEventListener("click", () => {
    if (emailValidation(popupInput.value, popupInput) != true) {
        popupInput.placeholder = "Correo Incorrecto"
    }
});