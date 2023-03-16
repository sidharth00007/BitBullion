import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

export default function SuperRare() {
    const {
        state: { data },
    } = CartState();

    //   const data = [
    //     {
    //       image: super1,
    //       // series: "Gloop Series",
    //       title: "Gold Coins 10.00 gm",
    //       price: "62,000",
    //       // tag: 12983,
    //       // time: 1,
    //     },
    //     {
    //       image: super2,
    //       // series: "Gloop Series",
    //       title: "Gold Coins 20.00 gm",
    //       price: "1,25,000" ,
    //       // tag: 12983,
    //       // time: 1,
    //     },
    //     {
    //       image: super3,
    //       // series: "Gloop Series",
    //       title: "Gold Coins 10.00 gm",
    //       price: "6,000",
    //       // tag: 12983,
    //       // time: 1,
    //     },
    //     {
    //       image: super4,
    //       // series: "Gloop Series",
    //       title: "Regal Gold Coin 10.00g",
    //       price: "57,000",
    //       // tag: 12983,
    //       // time: 1,
    //     },
    //   ];
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
