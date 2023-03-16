import React from "react";
import { CartState } from "../context/Context";
// import superEth from "../assets/supereth.png";
export default function Card({ prod }) {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    return (
        <div className="card">
            <div className="card-image">
                <img src={prod.image} alt="super1" />
            </div>
            <div className="card-content">
                <div className="card-heading">
                    <span className="card-series">{prod.series}</span>
                    <span className="card-top">Current Price</span>
                </div>
                <div className="card-details">
                    <h4 className="card-title">{prod.title}</h4>
                    <div className="card-price">
                        {/* <img src={superEth} alt="super eth" /> */}
                        <h4>₹ {prod.price}</h4>
                    </div>
                </div>
                {cart.some((p) => p.id === prod.id) ? (
                    <div className="card-sub-details">
                        <div>
                            <button
                                className="remove"
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    });
                                }}
                            >
                                Remove from CART
                            </button>
                        </div>
                        {/* <span>#{tag}</span>
                    <span>{time} day left</span> */}
                    </div>
                ) : (
                    <div className="card-sub-details">
                        <div>
                            <button
                                className="add"
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    });
                                }}
                            >
                                Add to CART
                            </button>
                        </div>
                        {/* <div className="remove">
                            <button className="remove">Remove from CART</button>
                        </div> */}
                        {/* <span>#{tag}</span>
                    <span>{time} day left</span> */}
                    </div>
                )}
            </div>
        </div>
    );
}
