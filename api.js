const axios =require('axios');

const api =  axios.create({
    baseURL: ' http://167.99.38.205:3000',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
  });
module.exports= api;

//baseURL: ' http://34.200.104.211:3000',