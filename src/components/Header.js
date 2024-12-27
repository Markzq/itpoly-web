import React from "react";
import { Link } from "react-router-dom"; // ใช้สำหรับการนำทางระหว่างหน้า

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText}>
          <Link to="/" style={styles.logoLink}>สาขาเทคโนโลยีสารสนเทศ</Link>
        </h1>
        <h3 style={styles.logoText}>
          <Link to="/" style={styles.logoLink}>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</Link>
        </h3>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#00CC33",  // สีเขียว
    color: "#fff", // ข้อความสีขาว
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center", // จัดวางให้อยู่ตรงกลาง
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // เงาเล็กน้อยเพื่อความเรียบหรู
  },
  logoContainer: {
    flex: 1,
    textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
  },
  logoText: {
    fontSize: "28px",
    margin: 0,
  },
  logoLink: {
    textDecoration: "none",
    color: "#FFFF33", // สีเหลือง
    fontWeight: "bold",
  },
};

export default Header;
