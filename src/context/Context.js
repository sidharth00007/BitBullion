import React, { createContext, useContext, useReducer } from "react";
import super1 from "../assets/shopping.png";
import super2 from "../assets/shopping4.png";
import super3 from "../assets/shopping.png";
import super4 from "../assets/shopping4.png";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
    const data = [
        {
            id: 1,
            image: super1,
            // series: "Gloop Series",
            title: "Gold Coins 10.00 gm",
            price: 62000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
        {
            id: 2,
            image: super2,
            // series: "Gloop Series",
            title: "Gold Coins 20.00 gm",
            price: 125000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
        {
            id: 3,
            image: super3,
            // series: "Gloop Series",
            title: "Gold Coins 10.00 gm",
            price: 6000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
        {
            id: 4,
            image: super4,
            // series: "Gloop Series",
            title: "Regal Gold Coin 10.00g",
            price: 57000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
        {
            id: 5,
            image: super4,
            // series: "Gloop Series",
            title: "Regal Gold Coin 10.00g",
            price: 57000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
        {
            id: 6,
            image: super4,
            // series: "Gloop Series",
            title: "Regal Gold Coin 10.00g",
            price: 57000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
        {
            id: 7,
            image: super4,
            // series: "Gloop Series",
            title: "Regal Gold Coin 10.00g",
            price: 57000,
            inStock: 10,
            // tag: 12983,
            // time: 1,
        },
    ];

    const [state, dispatch] = useReducer(cartReducer, {
        data: data,
        cart: [],
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    );
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
