//api code
function getAllClients(){
  /*const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': '813bf5e36996e6eba47aecfa3433744d'
  });*/
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
