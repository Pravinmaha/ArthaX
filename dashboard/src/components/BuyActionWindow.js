import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [orderType, setOrderType] = useState("Market"); // Market or Limit

  // Get close function from context
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    // Send order to backend
    axios.post("http://localhost:5000/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="buy-window-overlay">
      <div className="container" id="buy-window">
        {/* Header */}
        <div className="buy-window-header">
          <span className="buy-window-title">Buy — {uid}</span>
          <button className="close-btn" onClick={handleCancelClick}>✕</button>
        </div>

        {/* Order type tabs */}
        <div className="order-tabs">
          {["Market", "Limit", "SL"].map((type) => (
            <button
              key={type}
              className={`order-tab ${orderType === type ? "active" : ""}`}
              onClick={() => setOrderType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        {/* Footer */}
        <div className="buttons">
          <span className="margin-info">Margin required ₹140.65</span>
          <div className="action-btns">
            <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
            <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;