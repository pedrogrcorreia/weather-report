const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if(process.argv[2] === undefined){
    return
}

geocode(process.argv[2], (error, data) => {
    if(error){
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, {temp, feels, description}) => {
        if(error){
            return console.log(error)
        }
        console.log('Location: ' + data.location)
        console.log('Temperature: ' + temp)
        console.log('Feels Like: ' + feels)
        console.log('Description: ' + description)
    })
})

