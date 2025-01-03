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
        <h1 style={styles.title}>ยินดีต้อนรับสู่ IT Poly ของเรา</h1>
        <p style={styles.description}>
          เว็บไซต์นี้แสดงข้อมูลทั่วไปเกี่ยวกับสาขา รวมถึงกิจกรรมและข่าวสารที่น่าสนใจ
        </p>
        <div style={styles.section}>
          <h2>กิจกรรมที่น่าสนใจ</h2>
          <ul>
            <li>การคิดและทำอย่างสร้างสรรค์ คือแรงผลักดันที่พวกเรา ชาวเทคโนโลยีสารสนทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ ใช้เป็นแนวทางในการผลิตคอมพิวเตอร์ สร้างองค์ความที่โดนเด่นโดยบุคลากรผู้ทรงคุณวุฒิทั้งภายในและภายนอกสถานศึกษา เพิ่มพูนทักษะ ในด้านซ่อมบำรุงรักษาคอมพิวเตอร์ทั้งซอฟต์แวร์ และฮาร์ดแวร์ ผู้ที่สำเร็จการศึกษาสาขาสามารถประกอบอาชีพ ช่างในทุกองค์กรที่มีคอมพิวเตอร์หรือระบบสรสนเทศ ธุรกิจที่มีเทคโนโลยีสารสนเทศอยู่ ธุรกิจที่มีเทดโนโลยีสารสนเทศเป็นแกนหลัก ได้แก่ ธุรกิจผลิตซอฟต์แวร์หรือโปรแกรมคอมพิวตอร์ ธุรกิจบริการด้านข้อมูลข่าวสาร ธุรกิจด้านการให้ บริการระบบเครือข่ายคอมพิวเตอร์ ระบบอินเตอร์เน็ตหรือระบบเครือข่ายมือถือ ธุรกิจให้บริการด้านพาณิชย์ อิเล็กทรอนิกส์หรืออี-คอมเมิร์ช ธุรกิจให้คำปรึกษาด้านเทคโนโลยีสารสนทศ หรือที่เรียกว่าธุรกิจคอนซัลแตนต์ ธุรกิจแอนิมชั่นและเกม จบสาขาเทคโนโลยีสารสนเทศแล้ว สามารถไป ศึกษาต่อ ด้านระบบฐานข้อมูลองค์กร ด้านเน็ตเวิร์ต ด้านความปลอดภัยของระบบของคอมพิวเตอร์ ด้านระบบคอมพิวเตอร์อัจฉริยะหรือปัญญา และนำคอมพิวเตอร์ไปประยุกต์ในงานสาขาอื่น เช่น ด้านสื่อมวลชน ด้านมัลติมีเดีย ด้านแอนิมชั่น ด้านสารสนเทศเพื่อการแพทย์ ด้านสารสนเทศชีววิทยา ด้านการสร้างแบบจำลองเพื่อวิเคราะห์ทางเคมีและพิสิกส์ และสามารถศึกษาต่อระดับปริญญาตรีหลายสขา เช่น สาขาเทคโนโลยีสารสนเทศ สาขาคอมพิวตอร์ธุรกิจ, สาขาเทคโนโลยีสารสนทศธุรกิจ, สาขาเทคโนโลยีสารสนเทศและการสื่อสาร</li>

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
