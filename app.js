const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv[2] === undefined){
    return
}

geocode(process.argv[2], (error, data) => {
    if(error){
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log('Location: ' + data.location)
        console.log('Temperature: ' + forecastData.temp)
        console.log('Feels Like: ' + forecastData.feels)
        console.log('Description: ' + forecastData.description)
    })
})

