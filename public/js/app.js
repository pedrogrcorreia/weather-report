fetch('http://localhost:3000/weather?address=guihjgfdfgkhj').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const paragraphOne = document.querySelector('#p-1')
const paragraphTwo = document.querySelector('#p-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                paragraphOne.textContent = data.error
            } else {
                paragraphOne.textContent = data.location
                paragraphTwo.textContent = data.forecastData.temp
            }
        })
    })
})