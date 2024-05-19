const ConvertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
  const inputcurrencyvalue = document.querySelector(".input-currency").value
  const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
  const currencyvalueconverted = document.querySelector(".currency-value")

  const dolartoday = 5.2
  const euroToday = 6.2



  if (currencySelect.value == "Dolar") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputcurrencyvalue / dolartoday)
  }

  if (currencySelect.value == "Euro") {
    currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputcurrencyvalue / euroToday)


  }
  currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  )
    .format(inputcurrencyvalue)
}
function changecurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")
  if (currencySelect.value == "Dolar") {
    currencyName.innerHTML = "Dolar americano"
    currencyImage.src = "./dolar.png"
  }

  if (currencySelect.value == "Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./euro.png"
}
convertValues()
}


currencySelect.addEventListener("change", changecurrency)

ConvertButton.addEventListener("click", convertValues) 