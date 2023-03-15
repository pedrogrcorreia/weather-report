const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3a13f79ed82e86395e69ba2c7487d9d9&query=' +
    latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to contact the weather service!', undefined)
        } else if(body.error){
            callback(body.error.info, undefined)
        } else {
            callback(undefined, {
                temp: body.current.temperature,
                feels: body.current.feelslike,
                description: body.current.weather_descriptions[0],
                icon: body.current.weather_icons[0]
            })
        }
    })
}

module.exports = forecast