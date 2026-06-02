import React from "react";

// Funds page — shows available margin and fund details
const Funds = () => {
  return (
    <div className="funds-container">
      <h3 className="title">Funds</h3>

      <div className="funds-grid">
        {/* Equity funds card */}
        <div className="fund-card">
          <h4 className="fund-card-title">Equity</h4>
          <div className="fund-row">
            <span className="fund-label">Available margin</span>
            <span className="fund-value colored">₹3,740.00</span>
          </div>
          <hr className="fund-divider" />
          <div className="fund-row">
            <span className="fund-label">Used margin</span>
            <span className="fund-value">₹0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Opening balance</span>
            <span className="fund-value">₹3,740.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">SPAN margin</span>
            <span className="fund-value">₹0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Delivery margin</span>
            <span className="fund-value">₹0.00</span>
          </div>
          <div className="fund-actions">
<button className="btn btn-green">Add funds</button>
<button className="btn btn-blue">Withdraw</button>
          </div>
        </div>

        {/* Commodity funds card */}
        <div className="fund-card">
          <h4 className="fund-card-title">Commodity</h4>
          <div className="commodity-empty">
            <p>You don't have a commodity account.</p>
<button className="btn btn-blue">Open account</button>          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;