import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        {/* รูปภาพที่ใส่ในลิสต์ */}
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20231101-015141.JPG"
          alt="Image 1"
          style={styles.image}
        />
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20231121-105521.jpg"
          alt="Image 2"
          style={styles.image}
        />
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20241119-111604.jpg"
          alt="Image 3"
          style={styles.image}
        />
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20240829-094035.jpg"
          alt="Image 4"
          style={styles.image}
        />
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20240610-025001.jpg"
          alt="Image 5"
          style={styles.image}
        />
        <img
          src="https://www.lannapoly.ac.th/web/gallery/20240129-022006.jpeg"
          alt="Image 6"
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <h1 style={styles.title}>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
        <p style={styles.description}>
          เว็บไซต์นี้แสดงข้อมูลทั่วไปเกี่ยวกับสาขา รวมถึงกิจกรรมและข่าวสารที่น่าสนใจ
        </p>
        <div style={styles.section}>
          <h2>กิจกรรมที่น่าสนใจ</h2>
          <ul>
            <li>การปฐมนิเทศนักศึกษาใหม่</li>
            <li>โครงการพัฒนาทักษะเทคโนโลยี</li>
            <li>กิจกรรมเพื่อสังคม</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "#fff",
    padding: "20px",
    fontFamily: "'Garamond', serif",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "200px",
    marginRight: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    marginBottom: "15px",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "3em",
    marginBottom: "10px",
    color: "#FFD700",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  },
  description: {
    fontSize: "1.2em",
    lineHeight: "1.8",
    marginBottom: "30px",
    textAlign: "center",
    color: "#f0e68c",
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(5px)",
    marginTop: "30px",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
  li: {
    fontSize: "1.2em",
    padding: "10px",
    borderBottom: "2px solid #FFD700",
    color: "#eee",
    transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  },
  liHover: {
    transform: "scale(1.05)",
    color: "#FFD700",
  },
};

export default Home;
