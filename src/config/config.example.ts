import axios from 'axios'
const apiUrl = 'http://127.0.0.1:5000'

export const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})
