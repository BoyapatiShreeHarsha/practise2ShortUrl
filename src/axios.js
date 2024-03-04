import axios from "axios";

const API = axios.create({
    baseURL:"https://cleanuri.com"
})

export default API;