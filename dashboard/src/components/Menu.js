import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Menu items list — easy to add/remove items
  const menuItems = [
    { label: "Dashboard", path: "/", index: 0 },
    { label: "Orders", path: "/orders", index: 1 },
    { label: "Holdings", path: "/holdings", index: 2 },
    { label: "Positions", path: "/positions", index: 3 },
    { label: "Funds", path: "/funds", index: 4 },
    { label: "Apps", path: "/apps", index: 5 },
  ];

  // Logout: clear auth and go back to signup/login page
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signup");
  };

  return (
    <div className="menu-container">
      {/* Logo */}
      <img src="logo.png" className="menu-logo" alt="logo" />

      {/* Hamburger button — visible only on mobile */}
      <button
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <div className={`menus ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.index}>
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setSelectedMenu(item.index);
                  setIsMobileMenuOpen(false); // close on mobile after click
                }}
              >
                <p className={selectedMenu === item.index ? "menu selected" : "menu"}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="menu-divider" />

        {/* Profile section */}
        <div className="profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
          <div className="avatar">ZU</div>
          <p className="username">User</p>
        </div>

        {/* Profile dropdown */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <p className="dropdown-item">My Profile</p>
            <p className="dropdown-item">Settings</p>
            <p className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;