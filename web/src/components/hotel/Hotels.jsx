import { Alert, Button, CardActions, Popover, Rating, Typography } from "@mui/material"
import { useHotels } from "../../hooks/useHotels"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Edit from "@mui/icons-material/Edit"
import Delete from "@mui/icons-material/Delete"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Hotels() {

    const { hotels, deleteHotel } = useHotels()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = Boolean(anchorEl);
    const popoverId = openPopover ? 'simple-popover' : undefined;

    const handleEditHotel = (hotel) => {
        const handleClick = () => {
            navigate("/admin/edit-hotel", { state: { hotel } })
        }
        return handleClick
    }

    const handleDeleteHotel = (hotelId) => {
        const handleClick = () => {
            deleteHotel(hotelId)
        }
        return handleClick
    }

    const handleOpenPopover = (event) => {
        setAnchorEl(event.currentTarget);

    }


    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    return (
        <div className="m-2 w-full h-full flex flex-wrap">
            {hotels.map(hotel =>
                <Card key={hotel.id} className="w-fit m-2">
                    <CardContent variant="outlined">
                        <Typography sx={{ fontSize: 24 }}>
                            <strong>{hotel.name}</strong>
                        </Typography>
                        <Typography>
                            <strong>Address:</strong> {hotel.address}
                        </Typography>
                        <Typography>
                            <strong>Phone:</strong> {hotel.phone}
                        </Typography>
                        <Rating value={hotel.rating} readOnly />
                    </CardContent>
                    <CardActions className="justify-center">
                        <Button onClick={handleEditHotel(hotel)}>
                            <Edit color="action" />
                        </Button>

                        <Button
                            onClick={handleOpenPopover}
                            aria-describedby={popoverId}
                        >
                            <Delete sx={{ color: "red" }} />
                        </Button>
                        <Popover
                            id={popoverId}
                            open={openPopover}
                            anchorEl={anchorEl}
                            onClose={handleClosePopover}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Alert severity="error" className="items-center">
                                <p className="block mr-2">Are you sure you want to delete {hotel.name}?</p>
                                <Button
                                    color="error"
                                    variant="contained"
                                    className="w-full"
                                    onClick={handleDeleteHotel(hotel.id)}
                                >Delete</Button>
                            </Alert>
                        </Popover>
                    </CardActions>

                </Card>
            )
            }
        </div >
    )

}