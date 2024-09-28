import { useParams } from "react-router-dom"
import { useHotels } from "../../hooks/useHotels"
import { useEffect, useState } from "react"
import { Chip, CircularProgress, Divider, Typography } from "@mui/material"
import EmployeeTable from "../employee/EmployeeTable"

export default function Hotel() {

    const { id } = useParams()
    const { getHotel } = useHotels()
    const [hotel, setHotel] = useState(null)

    useEffect(() => {
        getHotel(id)
            .then(data => {
                setHotel(data)
            })
    }, [id])


    return (
        hotel ?
            <>
                <Chip label={hotel.name} />
                <Divider sx={{ margin: "1em 0 1em 0" }} />
                <div>
                    <Typography variant="h6">
                        My employees
                    </Typography>
                    <EmployeeTable hotelId={hotel.id} />
                </div>

            </>
            :
            <CircularProgress />
    )
}