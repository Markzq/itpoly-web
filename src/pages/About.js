import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>เกี่ยวกับเรา</h1>
      <p style={styles.description}>
        สาขาเทคโนโลยีสารสนเทศ (Information Technology: IT) เป็นสาขาที่เน้นการศึกษาเกี่ยวกับการใช้เทคโนโลยีในการจัดการและส่งข้อมูลโดยใช้คอมพิวเตอร์และเครือข่ายคอมพิวเตอร์ โดยมีการประยุกต์ใช้ในหลากหลายสาขาของธุรกิจและอุตสาหกรรมต่างๆ เพื่อเพิ่มประสิทธิภาพในการดำเนินงานและการติดต่อสื่อสาร
      </p>
      <div style={styles.mission}>
        <h2 style={styles.subtitle}>พันธกิจของเรา</h2>
        <ul style={styles.list}>
          <li>สร้างความเป็นเลิศทางด้านเทคโนโลยี</li>
          <li>ส่งเสริมการเรียนรู้ตลอดชีวิต</li>
          <li>พัฒนาความคิดสร้างสรรค์และนวัตกรรม</li>
        </ul>
      </div>
      <div style={styles.mission}>
        <h2 style={styles.subtitle}>หัวข้อหลักที่ศึกษาภายในสาขาเทคโนโลยีสารสนเทศ</h2>
        <ul style={styles.list}>
          <li>การพัฒนาและการจัดการซอฟต์แวร์</li>
          <li>เครือข่ายและการสื่อสารข้อมูล</li>
          <li>ฐานข้อมูล</li>
          <li>การรักษาความปลอดภัย</li>
          <li>ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง</li>
          <li>การพัฒนาเว็บไซต์และแอปพลิเคชัน</li>
          <li>เทคโนโลยีคลาวด์</li>
        </ul>
      </div>
      <div style={styles.mission}>
        <h2 style={styles.subtitle}>ทักษะที่ได้รับจากการศึกษาสาขานี้</h2>
        <ul style={styles.list}>
          <li>ทักษะการเขียนโปรแกรมและพัฒนาซอฟต์แวร์</li>
          <li>ทักษะในการจัดการข้อมูลและการใช้ฐานข้อมูล</li>
          <li>ทักษะการบริหารจัดการเครือข่ายและการรักษาความปลอดภัย</li>
          <li>ความเข้าใจในเทคโนโลยีใหม่ๆ เช่น ปัญญาประดิษฐ์และเทคโนโลยีคลาวด์</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#eef2f3",
    color: "#333",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "15px",
    color: "#6c757d",
  },
  description: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  mission: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  subtitle: {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#007bff",
  },
  list: {
    fontSize: "1.1em",
    lineHeight: "1.8",
    paddingLeft: "20px",
  },
};

export default About;
