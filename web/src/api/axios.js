import axios from "axios"

export const BASE_API_URL = 'http://localhost:3000'

export default axios.create({
    baseURL: BASE_API_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});