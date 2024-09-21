import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../components/home/Hero";

export const heroRouter = createBrowserRouter([
    {
        path: "/hero",
        element: <Hero />
    },
])