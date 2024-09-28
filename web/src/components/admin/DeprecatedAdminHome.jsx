import { Outlet, Link } from "react-router-dom";
import AccountMenu from "../account-menu/AccountMenu";
import useAuth from "../../hooks/useAuth";
import { Button, Drawer, Typography } from "@mui/material";
import AdminAside from "./AdminAside";
import { useState } from "react";

export function AdminHome() {

    const [auth] = useAuth()
    const [openDrawer, setOpenDrawer] = useState(false)
    const drawerWidth = 240

    return (
        <div className="flex">
            <aside>
                <ul>
                    <li>

                    </li>
                </ul>
            </aside>
            <main
                className="bg-almostBlack-300 flex-grow h-screen"
                style={{ marginLeft: `-${drawerWidth}` }}>
                <header className="mt-2 flex flex-row-reverse items-center">
                    <Button
                        onClick={() => { setOpenDrawer(!openDrawer) }}
                    >
                        Toggle drawer
                    </Button>
                    <div className="mr-4">
                        <AccountMenu name={auth.name + " " + auth.lastname} portrait={auth.portrait} />
                    </div>
                    <div className="mr-4">
                        <Link to="create-hotel">
                            <Button variant="contained">
                                <Typography>
                                    CREATE HOTEL
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </header>
                <div
                    className=" bg-almostBlack-100 overflow-scroll mt-5 rounded-lg"
                    style={{
                        width: "100%",
                        height: "80%"
                    }}
                >
                    <Outlet className="w-full max-h-full "></Outlet>
                </div>
            </main>

            <Drawer
                variant="persistent"
                open={openDrawer}


            >
                <Link to="/admin/hotels">
                    <AdminAside />
                </Link>
            </Drawer>

        </div >


    )
}