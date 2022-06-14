const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=ffd78ff7107577e9310475a643de0f68&query="+latitude + "," + longitude+ "&units=f";
        request({url, json: true}, (error, {body}) => {
            if(error){
                callback('Unable to connect to weather service!', undefined);
                    } else  if (body.error) {
                        callback('Unable to find the coordinates', undefined)
                    } else{
                        const data = body.current;
                        callback(undefined, `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees`)
                    }
        })
   
            
}

module.exports = forecast