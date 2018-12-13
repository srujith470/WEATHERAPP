const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/80f276f9e756507b4e1d042cd8c6a199/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('UNABLE TO LOAD CONNECT TO WEATHER SERVER')
        } else if (response.statusCode === 400) {
            callback('unable to fetch weather')
        } else if (response.statusCode === 200) {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    }
    );
};

module.exports.getWeather = getWeather;

