import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/bitcoin-gold.png";
// import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h1 className="main-title">About Us</h1>
          <h2 className="title">Why buy gold with bitcoin?</h2>
          <p className="description">
          We accept a wide variety of cryptocurrencies. You can buy gold with Bitcoin, Ethereum, stablecoins and more.
All our orders are carefully packaged and 100% insured. Gold has proven to be a stable investment for centuries. If you buy gold with bitcoin you are less exposed to the volatility risk of bitcoin and you spread your investments among multiple assets classes. This will diversify your investment portfolio and limit your risk.<div>show more</div>
          </p>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          
        </div>
      </div>
    </div>
  );
}