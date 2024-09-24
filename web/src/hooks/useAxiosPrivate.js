import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import { useRefresh } from "../hooks/useRefresh.js" 
import useAuth from "./useAuth.js";

export const useAxiosPrivate = () => {

    const refresh = useRefresh()
    const [auth] = useAuth()

    useEffect(()=> {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config
                if(error?.response?.status === 403 && !prevRequest.sent){
                    prevRequest.sent = true
                    const newAuth = await refresh()
                    prevRequest.headers['Authorization'] = `Bearer ${newAuth.accessToken}`
                    return axiosPrivate(prevRequest)
                }
                return error.response
            }
        )

        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept)
            axiosPrivate.interceptors.request.eject(requestIntercept)

        }
    }, [auth, refresh])

    return axiosPrivate
}