import { Outlet, Link } from "react-router-dom";

export function AdminHome() {


    return (
        <div className="flex">
            <aside className="bg-slate-500 w-80 min-h-full">
                <ul>
                    <li>
                        <Link>
                            <button>My hotels</button>
                        </Link>
                    </li>
                </ul>
            </aside>
            <main className="bg-slate-200 h-screen w-full">
                <header className="bg-red-500 mt-2 h-16 flex flex-row-reverse items-center">
                    <div className="mr-10">Profile</div>
                    <div className="mr-10">
                        <Link to="create-hotel">
                            <button
                                className="rounded-md bg-indigo-600 px-5 py-3 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                CREATE HOTEL
                            </button>
                        </Link>
                    </div>
                </header>
                <div className="bg-slate-100 w-full max-h-screen">
                    <Outlet className="bg-fuchsia-400 w-full h-full"></Outlet>
                </div>
            </main>
        </div>


    )
}