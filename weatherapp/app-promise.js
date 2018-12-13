const Yargs = require('yargs');
const argv = Yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    const axios = require('axios');
    var encodeaddress = encodeURIComponent(argv.address);
    var geosodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=QXgYB9R76Y16Mef5gddALyplqjtaucwW&location=${encodeaddress}`
    axios.get(geosodeURL).then((response) => {
        if(response.data.results[0].locations[0].geocodeQualityCode === 'A1XAX'){
            throw new Error('unable to find address');
        }
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherURL = `https://api.darksky.net/forecast/80f276f9e756507b4e1d042cd8c6a199/${lat},${lng}`;
        console.log(response.data);
        
        console.log(
            'address:', response.data.results[0].providedLocation.location,
            'latitude:', response.data.results[0].locations[0].latLng.lat,
            'longitude:', response.data.results[0].locations[0].latLng.lng)
    return axios.get(weatherURL);
    }).then((response) => {
        var temperature  = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`current temperature is ${temperature}. feels like ${apparentTemperature}.`)
    }).catch((e) => {
        if(e.code==='ENOTFOUND'){
            console.log('unable to connect to API');
        } else {
            console.log(e.message);
        }
    });

