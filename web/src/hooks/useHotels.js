import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth.js"
import { useAxiosPrivate } from "./useAxiosPrivate.js"
import { BASE_API_URL } from "../api/axios.js"
import useNotification from "./useNotification.js"
import { useNavigate } from "react-router-dom"

export function useHotels(){

    const axiosPrivate = useAxiosPrivate()
    const [auth] = useAuth()
    const [hotels, setHotels] = useState([])
    const { notificate } = useNotification()
    const navigate = useNavigate()

    const getHotels = async () => {
            const response = await axiosPrivate.get(`${BASE_API_URL}/hotel/${auth.id}`)
            setHotels(response.data)    
        }

    useEffect(()=>{  
        getHotels()
        console.log(hotels)
    })

    const deleteHotel = async (hotelId) => {
        const response = await axiosPrivate.delete(`${BASE_API_URL}/hotel/${auth.id}/${hotelId}`)
        notificate("Hotel deleted!", { variant: "success"})
        return response.status
    }

    const createHotel = async (name, address, phone, rating) => {
        const response = await axiosPrivate.post(
            `${BASE_API_URL}/hotel`,
            {
                name,
                address,
                phone,
                rating,
                adminId: auth.id
            }
        )
        if (response.status == 200)
            notificate("Hotel created!", { variant: "success"})
            navigate("/admin/hotels")
        if (response.status == 400)
            notificate("Somethig went wrong!")
        return response.status
    }

    const updateHotel = async (hotelId ,name, address, phone, rating) => {
        const response = await axiosPrivate.patch(
            `${BASE_API_URL}/hotel/${auth.id}/${hotelId}`,
            {
                name,
                address,
                phone,
                rating
            }
        )
        if (response.status == 200)
            notificate("Hotel updated!", { variant: "success"})
            navigate("/admin/hotels")
        if (response.status == 400)
            notificate("Somethig went wrong!")
        return response.status
    }

    return { hotels, deleteHotel, createHotel, updateHotel }
}