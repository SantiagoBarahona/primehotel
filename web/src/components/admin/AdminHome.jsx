import { Outlet, Link } from "react-router-dom";
import AccountMenu from "../account-menu/AccountMenu";
import useAuth from "../../hooks/useAuth";
import { Button, Typography } from "@mui/material";
import AdminAside from "./AdminAside";

export function AdminHome() {

    const [auth] = useAuth()

    return (
        <div className="grid grid-cols-5">
            <aside
                className="bg-backgroundAside col-span1 h-screen overflow-scroll">
                <ul>
                    <li>
                        <Link to="/admin/hotels">
                            <AdminAside />
                        </Link>
                    </li>
                </ul>
            </aside>
            <main className="bg-backgroundMain col-span-4 h-screen">
                <header className="mt-2 h-16 flex flex-row-reverse items-center">
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
                <div className="w-full max-h-screen overflow-scroll">
                    <Outlet className="w-full max-h-full"></Outlet>
                </div>
            </main>
        </div >


    )
}