const button = document.getElementById("submitForm")
const input = document.getElementById("inputText")
const apiKey = "Uff2dBKF2UZKlWFT7Ra1a7Aye5rHmlR9tr0YFElZ"
const img = document.getElementById("img")

const submitForm = async () => {
  if (!input.value) input.placeholder = "Введите номер"
  else {
    console.log(input.value)
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    )
    const objJSON = await response
    const obj = await objJSON.json()

    console.log(obj)
    alert("Ответ получен загляните в консоль!")
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault(), submitForm()
})
