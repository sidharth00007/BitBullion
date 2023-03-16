import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">How to buy gold with bitcoin?</h2>
          <p className="description">
          Step 1: Add a gold bar or coin to your shopping cart<br/>
          Step 2: Proceed to checkout and fill in your address<br/>
          Step 3: Pay from your bitcoin or altcoin wallet, or directly from an exchange<br/>
          Step 4: Receive your gold one business day later <br/>
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Why buy gold with bitcoin?</h2>
          <p className="description">
            Gold has proven to be a stable investment for centuries. If you buy gold with bitcoin you are less exposed to the volatility risk of bitcoin and you spread your investments among multiple assets classes. This will diversify your investment portfolio and limit your risk.
          </p>
        </div>
      </div>
    </div>
  );
}