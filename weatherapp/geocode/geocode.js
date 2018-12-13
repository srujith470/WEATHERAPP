const request = require('request');

var geocodeAddress = (address,callback) => {

  var encodeaddress = encodeURIComponent(address);
request
({
  
url:`http://www.mapquestapi.com/geocoding/v1/address?key=GBiOBgSRlHa2f4IKOieTJfdWDTqvYWx5&location=${encodeaddress}`, 
json:true
},
 (error, response, body)=> {
   console.log(body)

    if(error){
        callback('Unable to connect to user object');
    } 
    else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
      callback('WORNG ADDRESS')
    } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
  //   // console.log(JSON.stringify(body.results[0].locations[0].geocodeQualityCode));
  //   console.log( `ERROR: ${JSON.stringify(error, undefined, 4)}`);
  //   //     JSON.stringify(response, undefined, 4),
  //   console.log(`LATITUDE: ${body.results[0].locations[0].latLng.lat}`);
  //   console.log(    `LONGITUDE: ${body.results[0].locations[0].latLng.lng}`);
  //   console.log(`ADDRESS: ${body.results[0].providedLocation.location}`);
  //   console.log(`BODY: ${JSON.stringify(body, undefined, 4)}`);
   }

   
});
};
module.exports.geocodeAddress = geocodeAddress

