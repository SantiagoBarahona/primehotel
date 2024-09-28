import useAuth from "../hooks/useAuth.js"
import { useAxiosPrivate } from "./useAxiosPrivate.js"
import { BASE_API_URL } from "../api/axios.js"
import useNotification from "./useNotification.js"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export function useHotels() {

    const [hotels, setHotels] = useState([])
    const axiosPrivate = useAxiosPrivate()
    const [auth] = useAuth()
    const { notificate } = useNotification()
    const navigate = useNavigate()

    const getHotels = async () => {
        const response = await axiosPrivate.get(`${BASE_API_URL}/hotel`)
        setHotels(response.data)

    }

    const deleteHotel = async (hotelId) => {
        const response = await axiosPrivate.delete(`${BASE_API_URL}/hotel/${hotelId}`)
        notificate("Hotel deleted!", { variant: "success" })
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
        if (response.status == 200) {
            notificate("Hotel created!", { variant: "success" })
            navigate("/admin/hotels")
        }
        if (response.status == 400)
            notificate("Somethig went wrong!")
        return response.status
    }

    const updateHotel = async (hotelId, name, address, phone, rating) => {
        const response = await axiosPrivate.patch(
            `${BASE_API_URL}/hotel/${hotelId}`,
            {
                name,
                address,
                phone,
                rating
            }
        )
        if (response.status == 200) {
            notificate("Hotel updated!", { variant: "success" })
            navigate("/admin/hotels")
        }
        if (response.status == 400)
            notificate("Somethig went wrong!")
        return response.status
    }

    const getHotel = async (id) => {
        const response = await axiosPrivate.get(`${BASE_API_URL}/hotel/${id}`)
        if (response.status == 200) {
            return response.data
        }
        if (response.status == 400)
            notificate("Somethig went wrong!")
        return null
    }

    const navigateToHotel = (id) => {
        navigate(`/admin/hotel/${id}`)
    }

    useEffect(() => {
        getHotels()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        hotels,
        getHotel,
        deleteHotel,
        createHotel,
        updateHotel,
        navigateToHotel
    }
}