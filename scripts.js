const convertButton = document.querySelector(".button")
const selectCurrency = document.querySelector(".select-price")
const selectFrom = document.querySelector(".select-from")

function convertCurrency() {
    const inputValue = document.querySelector(".value-input").value
    const realValue = document.querySelector(".value-in-real")
    const convertValue = document.querySelector(".value-convert")
    const selectCurrency = document.querySelector(".select-price")

    const dolarToday = 5.76
    const euroToday = 6.26
    const euroFromdolar = 0.92
    const dolarFromEuro = 1.09


    //Inicio conversão de REAL para Outras Moedas
    if (selectFrom.value == 'real' && selectCurrency.value == 'dolar') {

        realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(inputValue / dolarToday)
    }

    if (selectFrom.value == 'real' && selectCurrency.value == 'euro') {

        realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue / euroToday)
    }

    if (selectFrom.value == 'real' && selectCurrency.value == 'real') {

        realValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)
    }

    //Inicio conversão de DOLAR para outras Moedas
    if (selectFrom.value == 'dolar' && selectCurrency.value == 'euro') {

        realValue.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue * euroFromdolar)
    }

    if (selectFrom.value == 'dolar' && selectCurrency.value == 'real') {

        realValue.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue * dolarToday)
    }

    if (selectFrom.value == 'dolar' && selectCurrency.value == 'dolar') {

        realValue.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(inputValue)
    }

    //Inicio conversão de EURO para outras Moedas
    if (selectFrom.value == 'euro' && selectCurrency.value == 'dolar') {

        realValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(inputValue * dolarFromEuro)
    }

    if (selectFrom.value == 'euro' && selectCurrency.value == 'real') {

        realValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue * euroToday)
    }

    if (selectFrom.value == 'euro' && selectCurrency.value == 'euro') {

        realValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)

        convertValue.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)
    }
}


function changeCurrency() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector(".currencyImage")
    const currencyFromName = document.querySelector(".currency-name-from")
    const currencyFromImage = document.querySelector(".currency-image-from")

    if (selectFrom.value == 'real') {
        currencyFromName.innerHTML = 'Real'
        currencyFromImage.src = './real.png'
    }

    if (selectFrom.value == 'euro') {
        currencyFromName.innerHTML = 'Euro'
        currencyFromImage.src = './euro.png'
    }

    if (selectFrom.value == 'dolar') {
        currencyFromName.innerHTML = 'Dólar'
        currencyFromImage.src = './dolar.png'
    }


    if (selectCurrency.value == 'dolar') {
        currencyName.innerHTML = 'Dolár'
        currencyImage.src = './dolar.png'
    }

    if (selectCurrency.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './euro.png'
    }

    if (selectCurrency.value == 'real') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = './real.png'
    }

    convertCurrency()

}

selectFrom.addEventListener("change", changeCurrency)
selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)