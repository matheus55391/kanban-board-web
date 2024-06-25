import axios from "axios";

const BASE_URL = "http://localhost:5019";

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: false,

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json"
    }
})


export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
})