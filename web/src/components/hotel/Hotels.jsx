import { Chip, Typography } from "@mui/material"
import { useHotels } from "../../hooks/useHotels"
import HotelCard from "./HotelCard"


export function Hotels() {

    const { hotels } = useHotels()

    return (
        <>
            <Chip label="My hotels" />
            <div className="w-full h-full grid grid-cols-2 gap-1 mt-2">
                {hotels.map(hotel =>
                    <HotelCard
                        key={hotel.id}
                        id={hotel.id}
                        name={hotel.name}
                        address={hotel.address}
                        phone={hotel.phone}
                        rating={hotel.rating}
                    />
                )
                }
            </div >
        </>
    )

}
