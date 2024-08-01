import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://essential-bank-back.vercel.app', 
  //  baseURL: 'http://localhost:5000'

});



export default axiosInstance;