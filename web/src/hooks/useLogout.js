import { useNavigate } from "react-router-dom"
import axios, { BASE_API_URL } from "../api/axios"
import useAuth from "./useAuth"

export function useLogout(){

    const [, setAuth] = useAuth()
    const navigate = useNavigate()

    const logout = async () => {
        await axios.get(`${BASE_API_URL}/logout`, { withCredentials: true})
        setAuth({})
        navigate('/admin/signin')
    }

    return { logout }
}