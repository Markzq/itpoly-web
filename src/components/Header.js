import React, { useState } from "react";
import { Link } from "react-router-dom"; // ใช้สำหรับการนำทางระหว่างหน้า

function Header() {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logoContainer}>
        <h1 style={headerStyles.logoText}>
          <Link to="/" style={headerStyles.logoLink}>สาขาเทคโนโลยีสารสนเทศ</Link>
        </h1>
        <h3 style={headerStyles.logoSubText}>
          <Link to="/" style={headerStyles.logoLink}>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</Link>
        </h3>
      </div>
    </header>
  );
}

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

const headerStyles = {
  header: {
    background: "linear-gradient(135deg, #74b9ff, #0984e3)", // Gradient for a modern look
    color: "#fff", // White text for contrast
    padding: "30px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Deeper shadow for depth
    fontFamily: "'Inter', sans-serif",
  },
  logoContainer: {
    textAlign: "center",
  },
  logoText: {
    fontSize: "28px",
    margin: "10px 0",
    fontWeight: "700",
    color: "#fff",
  },
  logoSubText: {
    fontSize: "18px",
    margin: "5px 0",
    fontWeight: "400",
    color: "#dfe6e9", // Lighter color for the subtext
  },
  logoLink: {
    textDecoration: "none",
    color: "inherit", // Inherits the white text color
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
};

const styles = {
  navbar: {
    backgroundColor: "#0984e3", // Matches the gradient base
    padding: "15px 0",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', sans-serif",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    textDecoration: "none",
    color: "#dfe6e9", // Light color for the links
    fontSize: "16px",
    fontWeight: "500",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "color 0.3s, background-color 0.3s, transform 0.3s",
  },
  navLinkHover: {
    transform: "scale(1.1)", // Slight scaling effect
  },
};

export default Header;
