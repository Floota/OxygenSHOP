
let euroButton = document.getElementById('eur__button')
let usdButton = document.getElementById('usa__button')
let britButton = document.getElementById('brit__button')
let firstPrice = document.getElementsByClassName('pricing__box__price__first')[0]
let secondPrice = document.getElementsByClassName('pricing__box__price__second')[0]
let thirdPrice = document.getElementsByClassName('pricing__box__price__third')[0]

let apiUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
let eurValue = null
let usaValue = null
let britValue = null

async function fetchCurrencyData() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return {
            eur : data['eur']['eur'],
            usd: data['eur']['usd'],
            gbp: data['eur']['gbp']
        };
    } catch (error) {
        console.error('Error occurred during fetch:', error)
    }
}

fetchCurrencyData().then(({eur, usd, gbp }) => {
    euroButton.addEventListener("click", () => {
        firstPrice.innerHTML = `0.00€`
        secondPrice.innerHTML = (25*eur).toFixed(2)+"€"
        thirdPrice.innerHTML = (60*eur).toFixed(2)+"€"
    })
    usdButton.addEventListener("click", () => {
        firstPrice.innerHTML= `$0.00`
        secondPrice.innerHTML = "$"+(25*usd).toFixed(2)
        thirdPrice.innerHTML = "$"+(60*usd).toFixed(2)
    })
    britButton.addEventListener("click", () => {
        firstPrice.innerHTML = `£0.00`
        secondPrice.innerHTML = "£"+(25*gbp).toFixed(2)
        thirdPrice.innerHTML = "£"+(60*gbp).toFixed(2)
    })
});