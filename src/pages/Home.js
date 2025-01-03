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
    backgroundColor: "#ffffff", // เปลี่ยนสีพื้นหลังให้เป็นสีขาว
    color: "#333", // ใช้สีตัวหนังสือเป็นสีเข้ม
    padding: "20px",
    fontFamily: "'Helvetica Neue', sans-serif", // ใช้ฟอนต์ที่เรียบง่าย
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
    borderRadius: "8px", // ปรับมุมให้เรียบ
    marginBottom: "15px",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f4f4f4", // ใช้พื้นหลังสีเทาอ่อน
    borderRadius: "8px", // ลดมุมให้เรียบ
  },
  title: {
    fontSize: "2.5em", // ขนาดตัวอักษรเล็กลง
    marginBottom: "10px",
    color: "#222", // สีเข้มขึ้นเพื่อให้ดูเรียบ
    fontWeight: "bold", // ให้ตัวหนาเพื่อเน้น
    textAlign: "center",
  },
  description: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    marginBottom: "30px",
    textAlign: "center",
    color: "#666", // สีตัวหนังสืออ่อนลงเพื่อให้ดูมินิมอล
  },
  section: {
    backgroundColor: "transparent", // ไม่มีพื้นหลังให้ดูโปร่งใส
    padding: "20px",
    borderRadius: "8px",
    marginTop: "30px",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
  li: {
    fontSize: "1.1em",
    padding: "8px",
    borderBottom: "1px solid #ddd", // เส้นขอบบางๆ ที่มุมล่าง
    color: "#333", // ใช้สีเข้มเพื่อให้ตัวหนังสือดูชัด
    transition: "transform 0.2s ease, color 0.2s ease",
  },
  liHover: {
    transform: "scale(1.02)", // ขยายเล็กน้อยเมื่อ hover
    color: "#000", // สีเข้มขึ้นเมื่อ hover
  },
};

export default Home;
