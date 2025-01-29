const myRequest = require('axios')

async function getActivity(){
    try{
        let response = await myRequest.get('https://www.boredapi.com/api/activity')
        console.log('We got it ${response.data.activity}')
    }
    catch(error){
        let response = await myRequest.get('https://httpstat.us/404')
         console.error('We failed with ${error}')
    }
}
getActivity()