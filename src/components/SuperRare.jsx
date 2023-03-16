import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

export default function SuperRare() {
    const {
        state: { data },
    } = CartState();
    return (
        <div className="super-rare">
            <div className="title-container">
                <h2 className="title">Collection</h2>
                <p className="description">
                    Buy Our 100% Pure Gold Now With Crypto
                </p>
            </div>
            <div className="cards">
                {data.slice(0, 4).map((prod) => (
                    <Card prod={prod} />
                ))}
            </div>
            <Link to="/buyer" className="btn3">
                Explore More
            </Link>
        </div>
    );
}
