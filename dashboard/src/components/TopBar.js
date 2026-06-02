import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* Left side: Market indices */}
      <div className="indices-container">
        <div className="index-item">
          <span className="index-name">NIFTY 50</span>
          <span className="index-points green">22,456.80</span>
          <span className="index-change green">+0.54%</span>
        </div>
        <div className="index-divider" />
        <div className="index-item">
          <span className="index-name">SENSEX</span>
          <span className="index-points green">73,961.31</span>
          <span className="index-change green">+0.48%</span>
        </div>
      </div>

      {/* Right side: Navigation menu */}
      <Menu />
    </div>
  );
};

export default TopBar;