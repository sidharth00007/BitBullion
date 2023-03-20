import React, { useState, useEffect } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
// import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
// import Spinner from "./components/Spinner";
// import ScrollToTop from "./components/ScrollToTop";
// import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";



const HomePage = () => {
    const [theme, setTheme] = useState("dark");
    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div data-theme={theme} className="app-container">
            {/* <ScrollToTop /> */}
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <Home />
            <Clients />
            <Release />
            {/* <Free /> */}
            {/* <Clients /> */}
            <SuperRare />

            <Like />
            {/* <Signup /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
