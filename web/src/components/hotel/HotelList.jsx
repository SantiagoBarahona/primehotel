import { List, ListItemButton, ListItemText } from "@mui/material"
import { useHotels } from "../../hooks/useHotels"
import { useNavigate } from "react-router-dom"

export default function HotelList() {

    const { hotels } = useHotels()
    const navigate = useNavigate()

    return (
        <List component="div" disablePadding>
            {hotels.map(hotel =>
                <ListItemButton
                    sx={{ pl: 4 }}
                    key={hotel.id}
                    onClick={() => { navigate(`/admin/hotel/${hotel.id}`) }}>
                    <ListItemText primary={hotel.name} />
                </ListItemButton>
            )}
        </List>
    )
} 