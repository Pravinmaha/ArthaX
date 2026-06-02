import React from "react";

const Summary = () => {
  return (
    <div className="summary-container">
      {/* Greeting */}
      <div className="username">
        <h6>Hi, User! 👋</h6>
        <hr className="divider" />
      </div>

      {/* Equity section */}
      <div className="section">
        <span className="section-title">
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>₹3,740</h3>
            <p>Margin available</p>
          </div>
          <hr className="data-divider" />
          <div className="second">
            <p>Margins used <span>₹0</span></p>
            <p>Opening balance <span>₹3,740</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings summary section */}
      <div className="section">
        <span className="section-title">
          <p>Holdings (13)</p>
        </span>
        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹1,553 <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr className="data-divider" />
          <div className="second">
            <p>Current Value <span>₹31,430</span></p>
            <p>Investment <span>₹29,875</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;