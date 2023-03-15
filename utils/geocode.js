const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text='+ encodeURIComponent(address) +'&apiKey=4397c070c88949c7a1e16a7d31f9d44d'
    request({url: url, json:true}, (error, response) => {
        if(error){
            callback('Unable to contact the geocoding service!', undefined)
        } else if(response.body.error){
            callback(response.body.error, undefined)
        } 
        else if(response.body.features.length === 0){
            callback('No matches found!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].properties.lat,
                longitude: response.body.features[0].properties.lon,
                location: response.body.features[0].properties.formatted,
            })
        }
    })
}

module.exports = geocode