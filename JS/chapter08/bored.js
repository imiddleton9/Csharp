const myRequest = require('axios')

myRequest.get('https://www.boredapi.com/api/activity')
    .then(respond => console.log('We got it $(response.data.activity)'))
    .catch(error => console.error('We failed with $(error)'))
    .get('https://httpstat.us/404')