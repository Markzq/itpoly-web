import React, { useState } from "react";
import { Link } from "react-router-dom"; // ใช้สำหรับการนำทางระหว่างหน้า

function Navbar() {
  const [hoverColor, setHoverColor] = useState("rgb(255, 0, 0)");

  const handleHover = (event) => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    setHoverColor(randomColor);
    event.target.style.color = randomColor;
    event.target.style.transform = styles.navLinkHover.transform;
  };

  const handleLeave = (event) => {
    event.target.style.color = styles.navLink.color;
    event.target.style.transform = "none";
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/courses" style={styles.navLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Courses</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#f7f7f7",
    padding: "15px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Inter', sans-serif",
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  navItem: {
    margin: "0 20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "18px",
    fontWeight: "500",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "color 0.3s, transform 0.3s, background-color 0.3s",
  },
  navLinkHover: {
    transform: "scale(1.1)",
  },
};

export default Navbar;
