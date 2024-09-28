import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Hero() {
    return (


        <>
            {/* Hero */}
            <div className="bg-almostBlack-100 relative overflow-hidden py-24 lg:py-32">
                {/* Gradients */}
                <div
                    aria-hidden="true"
                    className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
                >
                    <div className="bg-almostBlack-200 bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
                    <div className="bg-almostBlack-200 bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
                </div>
                {/* End Gradients */}
                <div className="relative z-10 text-white">
                    <div className="container py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="">Elevate your hotel</p>
                            {/* Title */}
                            <div className="mt-5 max-w-2xl">
                                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                    Primehotel
                                </h1>
                            </div>
                            {/* End Title */}
                            <div className="mt-5 max-w-3xl">
                                <p className="text-xl text-muted-foreground">
                                    Manage every aspect of your hotel!
                                    Manage employees, schedules, inventory, and much more...
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="mt-8 gap-3 flex justify-center">
                                <Link to="admin/">
                                    <Button color="primary" variant="contained">Sign up</Button>
                                </Link>
                            </div>
                            {/* End Buttons */}
                            <div className="mt-2">
                                <p className="italic text-gray-400">
                                    You are already a member? <Link to="/admin/signin" className="text-almostBlue-100">Sign in!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero */}
        </>
    );
}

