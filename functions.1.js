const functions = {
  add: (num1,num2) => num1 + num2
}


//api code
var getWeather = function(zipcode) {
  $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + apiKey).then(function(response) {
    cTemp=((response.main.temp)-273.15)
    fTemp=((cTemp)*(9/5)+32)
    console.log(response)
    console.log(fTemp);
    return city = console.log(response.name);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

module.exports = functions;
