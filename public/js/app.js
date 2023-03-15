const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const paragraphOne = document.querySelector('#p-1')
const paragraphTwo = document.querySelector('#p-2')
const img = document.querySelector('img')

const locationMessage = 'Location: '
const tempMessage = (temp, feels, description) => {
    return `Temperature: ${temp}
     Feels: ${feels}
     Weather: ${description}`
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                paragraphOne.textContent = data.error
            } else {
                paragraphOne.textContent = locationMessage + data.location
                paragraphTwo.innerText = tempMessage(data.forecastData.temp, data.forecastData.feels, data.forecastData.description)
                img.src = data.forecastData.icon
            }
        })
    })
})