const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c8e17cadb6364c133f90fd9d8f10bd50/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });      
    } else {
      callback('Unable to fetch weather.');
    } 
    
  });
};

module.exports.getWeather = getWeather;