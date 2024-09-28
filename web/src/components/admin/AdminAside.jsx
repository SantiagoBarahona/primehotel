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
import HotelList from '../hotel/HotelList';

export default function AdminAside() {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <aside className="w-full h-screen overflow-scroll">
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
                    <HotelList />
                </Collapse>
            </List>
        </aside>

    );
}

