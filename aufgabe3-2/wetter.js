const express = require('express');
const app = express();
const port = 3000;




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



const request = require('request');
let url =`https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=860400`;

request.get({
  url: url,
  json: true,
  headers: {'User-Agent': 'request'}
}, (err, res, data) => {
  if (err) {
    console.log('Error:', err);
  } else if (res.statusCode !== 200) {
    console.log('Status:', res.statusCode);
  } else {
    // data is already parsed as JSON:
    console.log(data.currentWeather.temperature);

    app.get('/', (request, response) => {
      response.send(data.currentWeather);
    });
  }
});
