'use strict';
const axiosRequest = require('axios')

axiosRequest
    .get(`http://www.boredapi.com/api/activity?type=${eventType}&participants=${numPart}`)
    .then(response => {
         return 
    })
    .catch(error => {
        window.alert(`ERROR! ${error}`)
        console.error(`ERROR! ${error}`)
    })

    

