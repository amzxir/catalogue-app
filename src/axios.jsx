import axios from "axios";

export default axios.create({
    baseURL: 'https://react-mini-projects-api.classbon.com',
    headers : {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
    }
});