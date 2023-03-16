import React from "react";
import home from "../assets/gold.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          {/* <p className="sub-title">Launching Soon</p> */}
          <h1 className="title">BUY GOLD & SILVER WITH CRYPTO</h1>
          <p className="description">
          We accept a wide variety of cryptocurrencies. You can buy gold with Bitcoin, Ethereum, stablecoins and more.
          </p>
          <button>Explore More</button>
          {/* <button className="btn1">Explore More</button> */}
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            {/* <div className="ellipse pink"></div>
            <div className="ellipse orange"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
