import axios from 'axios'
let Http=axios.create({
    baseURL:'https://localhost:44378/api/',
    credentials:'include',
    withCredentials:true,

    headers:{
        'content-type':'application/json',
        // 'Access-Control-Allow-Origin':'http://localhost:3000',
        // 'Access-Control-Allow-Credentials':'*',
        // 'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    },
});
export default Http