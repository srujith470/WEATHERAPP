const Yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')
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
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results);
        weather.getWeather(results.latitude,results.longitude, (errorMessage, weathersResult) => {
            if (errorMessage){
                console.log(errorMessage);
            } else{
                console.log(JSON.stringify(weathersResult, undefined, 2));
                    console.log(`It's currently ${weathersResult.temperature}. It feels like ${weathersResult.apparentTemperature}`)
            }   
        } );
    }
})
console.log(argv);

