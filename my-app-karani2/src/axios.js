import axios from 'axios'
const instance = axios.create({
    baseURL:'https://us-central1-karanie-commerce.cloudfunctions.net/api'
   // baseURL:'http://localhost:5001/karanie-commerce/us-central1/api'
})
export  default instance; 