import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Alert, Button, Chip, Rating, TextField, Typography } from "@mui/material"
import { useHotels } from "../../hooks/useHotels"
import ArrowBack from "@mui/icons-material/ArrowBack"

export default function HotelForm({ edit = false }) {

    const location = useLocation()
    const navigate = useNavigate()
    const [hotelName, setHotelName] = useState(location.state?.hotel.name)
    const [address, setAddress] = useState(location.state?.hotel.address)
    const [phone, setPhone] = useState(location.state?.hotel.phone)
    const [rating, setRating] = useState(3)
    const [error, setError] = useState(false)
    const { createHotel, updateHotel } = useHotels()

    const handleNameChange = () => {
        setHotelName(event.target.value)
        setError(false)
    }

    const handleAddressChange = () => {
        setAddress(event.target.value)
    }

    const handlePhoneChange = () => {
        setPhone(event.target.value)
    }

    const hanldeCreate = async () => {
        event.preventDefault()
        const status = await createHotel(hotelName, address, phone, rating)
        if (status === 400) {
            setError(true)
        }

    }

    const handleUpdate = async () => {
        event.preventDefault()
        const status = await updateHotel(location.state.hotel.id, hotelName, address, phone, rating)
        if (status == 400)
            setError(true)

    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="flex flex-col justify-center">

            <div>
                <Button
                    sx={{ display: "inline", top: 0, width: "fit-content" }}
                    onClick={handleBack}
                >
                    <ArrowBack />
                </Button>

                <Chip label={edit ? "Edit hotel" : "Create hotel"} sx={{ width: "fit-content" }} />
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Typography
                    variant="h4"
                >
                    {edit ? "Edit your hotel data" : "Enter the following data"}
                </Typography>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <div className="mt-3">
                            <TextField
                                label="Hotel name"
                                name="name"
                                required
                                defaultValue={edit ? location.state.hotel.name : ''}
                                onChange={handleNameChange}
                                className="w-full"
                            />
                            {error && <Alert severity="error">This name has already been chosen!</Alert>}
                        </div>
                        <div className="mt-3 flex justify-center">
                            <Typography component="legend">Hotel rating: </Typography>
                            <Rating
                                required
                                onChange={(event, newValue) => { setRating(newValue) }}
                                defaultValue={rating}
                            />
                        </div>
                        <div className="mt-3">
                            <TextField
                                label="Address"
                                name="address"
                                defaultValue={edit ? location.state.hotel.address : ''}
                                required
                                onChange={handleAddressChange}
                                className="w-full"
                            />
                        </div>
                        <div className="mt-3">
                            <TextField
                                label="Hotel phone number"
                                name="phone"
                                required
                                defaultValue={edit ? location.state.hotel.phone : ''}
                                onChange={handlePhoneChange}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="w-full"
                            variant="contained"
                            onClick={edit ? handleUpdate : hanldeCreate}
                        >
                            {edit ? "UPDATE" : "CREATE"}
                        </Button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export function HotelCreatedSuccessfully() {
    return (
        <div>
            <h1>Hotel created successfully!</h1>
        </div>
    )
}
