import { Alert, Button, CardActions, Popover, Rating, Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Edit from "@mui/icons-material/Edit"
import Delete from "@mui/icons-material/Delete"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useHotels } from "../../hooks/useHotels"

export default function HotelCard({ id, name, address, phone, rating }) {

    const { deleteHotel, navigateToHotel } = useHotels()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = Boolean(anchorEl);
    const popoverId = openPopover ? 'simple-popover' : undefined;

    const handleClick = () => {
        navigateToHotel(id)
    }

    const handleEditHotel = () => {
        navigate("/admin/edit-hotel", { state: { hotel: { id, name, address, phone, rating } } })
    }

    const handleDeleteHotel = () => {
        deleteHotel(id)
    }

    const handleOpenPopover = (event) => {
        setAnchorEl(event.currentTarget);
    }


    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    return (
        <Card
            onDoubleClick={handleClick}
            sx={{
                border: "solid 2px transparent",
                transition: "border-color ease .25s",
                ":hover": {
                    cursor: "pointer",
                    borderColor: "white",
                    boxShadow: "0 0 10px white"
                }
            }}
        >
            <CardContent

            >
                <Typography sx={{ fontSize: 24 }}>
                    <strong>{name}</strong>
                </Typography>
                <Typography>
                    <strong>Address:</strong> {address}
                </Typography>
                <Typography>
                    <strong>Phone:</strong> {phone}
                </Typography>
                <Rating value={Number(rating)} readOnly />
            </CardContent>
            <CardActions className="justify-center" color="secondary">
                <Button onClick={handleEditHotel}>
                    <Edit color="action" />
                </Button>

                <Button
                    onClick={handleOpenPopover}
                    aria-describedby={popoverId}
                >
                    <Delete color="error" />
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
                        <p className="block mr-2">Are you sure you want to delete {name}?</p>
                        <Button
                            color="error"
                            variant="contained"
                            className="w-full"
                            onClick={handleDeleteHotel}
                        >Delete</Button>
                    </Alert>
                </Popover>
            </CardActions>

        </Card>
    )
}
