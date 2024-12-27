import React from "react";
import { Link } from "react-router-dom"; // ใช้สำหรับการนำทางระหว่างหน้า

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/courses" style={styles.navLink}>Courses</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#009900",
    padding: "10px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', sans-serif", // ฟอนต์มินิมอล
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
    color: "white",
    fontSize: "16px", // ขนาดฟอนต์ที่เหมาะสม
    fontWeight: "500", // น้ำหนักฟอนต์แบบปกติ
    transition: "color 0.3s, transform 0.3s", // ทำให้เปลี่ยนสีและมีเอฟเฟกต์ในการโฮเวอร์
  },
  // เพิ่มการเปลี่ยนสีและขนาดเมื่อ hover
  navLinkHover: {
    color: "#ff6347", // เปลี่ยนสีเมื่อ hover เป็นสีส้ม
    transform: "scale(1.3)", // ขยายเล็กน้อย
  },
};

export default Navbar;
