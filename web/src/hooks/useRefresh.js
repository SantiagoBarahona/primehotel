import useAuth  from "./useAuth.js";
import { axiosPrivate } from "../api/axios.js"
export function useRefresh(){

    const [,setAuth] = useAuth()

    
    const refresh = async () =>{
        const response = await axiosPrivate.post('/refresh', {
            withCredentials: true,
        })
        setAuth(prev => {
            return { ...prev, ...response.data}
        })
        return response.data
    }

    return refresh
}