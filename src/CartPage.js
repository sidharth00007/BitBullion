import React, { useState, useEffect } from "react";
// import Clients from "./components/Clients";
import Footer from "./components/Footer";
// import Free from "./components/Free";
// import Home from "./components/Home";
// import Like from "./components/Like";
import Navbar from "./components/Navbar";
// import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import { CartState } from "./context/Context";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
// import Card from "./components/Card";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
    }, [cart]);

    return (
        <div data-theme={theme} className="app-container">
            <ScrollToTop />
            <Navbar changeTheme={changeTheme} currentTheme={theme} />

            {cart.length > 0 ? (
                <div className="cart">
                    <h1 className="head">Cart</h1>
                    <div className="product">
                        <Row className="headers">
                            <Col md={2}>
                                <div className="img-cart"></div>
                            </Col>
                            <Col md={2}>
                                <span>Product</span>
                            </Col>
                            <Col md={2}>
                                <span> Price</span>
                            </Col>
                            <Col md={2}>
                                <span> Quantity</span>
                            </Col>
                            <Col md={2}>
                                {/* <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                });
                                            }}
                                        > */}
                                {/* <AiFillDelete
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    });
                                }}
                                fontSize="20px"
                            /> */}
                                {/* </Button> */}
                            </Col>
                        </Row>
                        <ListGroup>
                            {cart.map((prod) => (
                                <ListGroup.Item key={prod.id}>
                                    <Row>
                                        <Col md={2}>
                                            <div className="img-cart">
                                                <Image
                                                    // height="100px"
                                                    src={prod.image}
                                                    alt={prod.title}
                                                    fluid
                                                    rounded
                                                />
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <span>{prod.title}</span>
                                        </Col>
                                        <Col md={2}>
                                            <span> ₹ {prod.price}</span>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                as="select"
                                                value={prod.qty}
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: "CHANGE_CART_QTY",
                                                        payload: {
                                                            id: prod.id,
                                                            qty: e.target.value,
                                                        },
                                                    });
                                                }}
                                            >
                                                {[
                                                    ...Array(
                                                        prod.inStock
                                                    ).keys(),
                                                ].map((x) => (
                                                    <option key={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            {/* <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                });
                                            }}
                                        > */}
                                            <AiFillDelete
                                                onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    });
                                                }}
                                                fontSize="20px"
                                            />
                                            {/* </Button> */}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>

                    <div className="filters summary">
                        <span className="title">
                            Subtotal ({cart.length}) items
                        </span>
                        <span style={{ fontWeight: 700, fontSize: 20 }}>
                            Total: ₹ {total}
                        </span>
                        <Button
                            className="proceed"
                            type="button"
                            disabled={cart.length === 0}
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            ) : (
                <h3 className="empty">Add Products to cart to see here !</h3>
            )}
            {/* <Home /> */}
            {/* <Clients /> */}
            {/* <Release /> */}
            {/* <Free /> */}
            {/* <Clients /> */}
            {/* <SuperRare /> */}

            {/* <Like /> */}
            {/* <Signup /> */}
            <Footer />
        </div>
    );
};

export default CartPage;
