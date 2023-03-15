const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url = 'http://api.weatherstack.com/current?access_key=3a13f79ed82e86395e69ba2c7487d9d9&query='//37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {

//     if(error){
//         console.log('Unable to contact the weather service!')
//     } else if(response.body.error){
//         console.log(response.body.error.info)
//     } else {
//         var degrees = response.body.current.temperature
//         var feel = response.body.current.feelslike
//         console.log(`It is currently ${degrees} degrees out. It feels like ${feel} degrees out.`)
//     }
// })

// const urlMap = 'https://api.geoapify.com/v1/geocode/search?text=fegesdasdadadeaeda&apiKey=4397c070c88949c7a1e16a7d31f9d44d'

// request({url: urlMap, json:true}, (error, response) => {
//     if(error){
//         console.log('Unable to contact the geocoding service!')
//     } else if(response.body.error){
//         console.log(response.body.message)
//     } 
//     else if(response.body.features.length === 0){
//         console.log('No matches found!')
//     } else {
//         console.log(response.body.features[0].properties.lon)
//         console.log(response.body.features[0].properties.lat)
//     }
// })



// geocode('Coimbra, Portugal', (error, data, callback) => {
//     console.log(error)
//     console.log(data)
// })

forecast(37.8267,-122.4233, (error, data) => {
    console.log(error)
    console.log(data)
})