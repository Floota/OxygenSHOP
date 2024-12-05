
let euroButton = document.getElementById('euro__button')
let usaButton = document.getElementById('usa__button')
let britButton = document.getElementById('brit__button')
let firstPrice = document.getElementsByClassName('pricing__box__price__first')
let secondPrice = document.getElementsByClassName('pricing__box__price__second')
let thirdPrice = document.getElementsByClassName('pricing__box__price__third')

let apiUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
let usaValue = null
let britValue = null

async function fetchCurrencyData() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return {
            usd: data['eur']['usd'],
            gbp: data['eur']['gbp']
        };
    } catch (error) {
        console.error('Error occurred during fetch:', error)
    }
}
fetchCurrencyData().then(({ usd, gbp }) => {
    console.log(`EUR to USD: ${usd}`);
    console.log(`EUR to GBP: ${gbp}`);
});