import React, { useEffect } from "react";
// import Free from "./components/Free";
import HomePage from "./HomePage";
import CartPage from "./CartPage";

import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExploreMore from "./ExploreMore";


function App() {


    useEffect(() => {
        const registerAnimations = () => {
            const sr = scrollreveal({
                origin: "bottom",
                distance: "80px",
                duration: 2000,
                reset: false,
            });
            sr.reveal(
                `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
                {
                    interval: 500,
                }
            );
        };
        registerAnimations();
    }, []);

    return (
        <div>




            <BrowserRouter>
                <Routes><Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/buyer" element={<ExploreMore />} />
                </Routes>
            </BrowserRouter>





        </div>
    );
}

export default App;
