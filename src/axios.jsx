import axios from "axios";

export default axios.create({
    baseURL: 'https://react-mini-projects-api.classbon.com',
    headers : {
        "Access-Control-Allow-Headers": "https://amzxir.github.io/catalogue/",
        "Access-Control-Allow-Origin": "https://amzxir.github.io/catalogue/",
        "Access-Control-Allow-Methods": "https://amzxir.github.io/catalogue/"      
    }
});