import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
// import { AiFillCaretDown } from "react-icons/ai";

export default function Navbar({ changeTheme, currentTheme }) {
    const {
        state: { cart }
    } = CartState();
    const [navState, setNavState] = useState(false);
    return (
        <nav>
            <div className="brand-container">
                <div className="brand">
                    <Link to="/">
                        <img src={logo} height={100} width={100} alt="logo" />
                    </Link>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        {navState ? (
                            <MdClose onClick={() => setNavState(false)} />
                        ) : (
                            <GiHamburgerMenu
                                onClick={() => setNavState(true)}
                            />
                        )}
                    </div>
                    <div className="mode" onClick={changeTheme}>
                        {currentTheme === "dark" ? (
                            <ImSun className="light" />
                        ) : (
                            <BsFillMoonFill className="dark" />
                        )}
                    </div>
                </div>
            </div>
            <div className={`links-container ${navState ? "nav-visible" : ""}`}>
                <ul className="links">
                    <li>
                        <Link href="#features">Features</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#launch">Launch</Link>
                    </li>
                    <li>
                        <Link href="#signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <FaShoppingCart size="20px" color="white" />{" "}
                            <span style={{ color: "white", fontSize: "20px" }}>
                                ({cart.length})
                            </span>
                        </Link>
                    </li>
                    {/* <li onClick={changeTheme}>
          
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li> */}
                </ul>
            </div>
        </nav>
    );
}
