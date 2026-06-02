import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check URL for auth param first (coming from login page)
    const urlParams = new URLSearchParams(window.location.search);
    const authFromURL = urlParams.get("auth");

    if (authFromURL === "true") {
      // Save to this port's localStorage
      localStorage.setItem("isLoggedIn", "true");
      // Clean URL
      window.history.replaceState({}, document.title, "/");
      setIsLoggedIn(true);
    } else {
      // Check localStorage directly
      const loggedIn = localStorage.getItem("isLoggedIn");
      if (loggedIn === "true") {
        setIsLoggedIn(true);
      }
    }

    setAuthChecked(true);
  }, []);

  // Wait until auth check is done
  if (!authChecked) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "14px",
        color: "#888"
      }}>
        Loading...
      </div>
    );
  }

  // Not logged in — go back to landing page
  if (!isLoggedIn) {
    window.location.replace("http://localhost:3000/signup");
    return null;
  }

  // Logged in — show dashboard
  return (
    <div>
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;


// import React from "react";
// import TopBar from "./TopBar";
// import Dashboard from "./Dashboard";

// const Home = () => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");

//   // If not logged in, redirect back to landing page
//   if (!isLoggedIn) {
//     window.location.href = "http://localhost:3000/signup";
//     return null;
//   }

//   return (
//     <div>
//       <TopBar />
//       <Dashboard />
//     </div>
//   );
// };

// export default Home;