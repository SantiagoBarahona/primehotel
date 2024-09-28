import { useEffect, useState } from "react";
import { axiosPrivate, BASE_API_URL } from "../api/axios";

export default function useEmployee(hotelId){
  
    const [ employees, setEmployees] = useState([])


    const getEmployees = async () => {
        const response = await axiosPrivate.get(`${BASE_API_URL}/employee?hotelId=${hotelId}`)
        if(response.status == 200){
            setEmployees(response.data)
        }
        return response.status
    }

    const createEmployee = async (hotelId) => {
        // TODO
        alert("Creando empleado del hotel " + hotelId)
    }

    useEffect(()=> {
        getEmployees()
    }, [])

    return { employees, createEmployee }
}