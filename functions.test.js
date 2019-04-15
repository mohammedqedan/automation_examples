//api code
function getAllClients(){
  const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': '813bf5e36996e6eba47aecfa3433744d'
  });
  return fetch('http://api.openweathermap.org/data/2.5/weather?zip=', {
    method: 'GET',
    mode: 'same-origin',
    headers: myHeaders,
  })
  .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      console.debug(response);
    }).catch(error => {
      console.error(error);
    });
    var scriptResponse;
    return scriptResponse = (response.status)
  }
  getAllClients();











/*const functions = require ('./functions');


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

test ('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});
*/
