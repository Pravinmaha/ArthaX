import React from "react";
import React, { useEffect } from "react";

const Apps = () => {
  return (
    <div className="apps-container">
      <h3 className="title">Apps</h3>
      <p className="apps-subtitle">Explore tools and integrations for your trading.</p>

      <div className="apps-grid">
        {[
          { name: "Kite", desc: "Web trading platform", icon: "📈" },
          { name: "Console", desc: "Portfolio & reports", icon: "📊" },
          { name: "Coin", desc: "Mutual fund investing", icon: "💰" },
          { name: "Varsity", desc: "Stock market learning", icon: "📚" },
          { name: "Sentinel", desc: "Market alerts", icon: "🔔" },
          { name: "Streak", desc: "Algo trading", icon: "⚡" },
        ].map((app) => (
          <div className="app-card" key={app.name}>
            <div className="app-icon">{app.icon}</div>
            <div>
              <p className="app-name">{app.name}</p>
              <p className="app-desc">{app.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


function App() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "http://localhost:3000";
    }
  }, []);

  return (
    <div>
      Dashboard
    </div>
  );
}

export default App;
export default Apps;