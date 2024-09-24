import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { BsBuilding } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import { useState } from 'react';
import { useHotels } from '../../hooks/useHotels.js'

export default function AdminAside() {

    const [open, setOpen] = useState(true);
    const { hotels } = useHotels()

    const handleClick = () => {
        setOpen(!open);
    };



    return (
        <>
            <header className='flex justify-center items-center mt-4 mb-4'>
                <i><img src='/logo-icon.png' className='w-12'></img></i>
                <h1 className='text-white text-2xl'><strong>Prime hotel</strong></h1>
            </header>
            <List
                sx={{ width: '100%', color: '#fff' }}
                component="nav">
                <ListItemButton onClick={handleClick} selected>
                    <ListItemIcon>
                        <IconContext.Provider value={{ color: 'white' }}>
                            <BsBuilding />
                        </IconContext.Provider>
                    </ListItemIcon>
                    <ListItemText primary="My hotels" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {hotels.map(hotel =>
                            <ListItemButton sx={{ pl: 4 }} key={hotel.id}>
                                <ListItemText primary={hotel.name} />
                            </ListItemButton>
                        )}
                    </List>
                </Collapse>
            </List>
        </>

    );
}

