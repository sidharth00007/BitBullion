import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { CartState } from "./context/Context";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";

const ExploreMore = () => {
    const {
        state: { data },
    } = CartState();
    const [theme, setTheme] = useState("dark");
    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div data-theme={theme} className="app-container">
            
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <div className="super-rare">
                <div className="title-container">
                    <h2 className="title">Collection</h2>
                    <p className="description">
                        Buy Our 100% Pure Gold Now With Crypto
                    </p>
                </div>
                <div className="cards">
                    {data.map((prod) => (
                        <Card prod={prod} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ExploreMore;
