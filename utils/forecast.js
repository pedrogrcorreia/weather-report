const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3a13f79ed82e86395e69ba2c7487d9d9&query=' +
    latitude + ',' + longitude

    console.log(url)

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to contact the weather service!', undefined)
        } else if(response.body.error){
            callback(response.body.error.info, undefined)
        } else {
            callback(undefined, {
                temp: response.body.current.temperature,
                feels: response.body.current.feelslike,
                description: response.body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast