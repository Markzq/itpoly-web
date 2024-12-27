import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>
          <a href="#contactForm" style={styles.link}>มีปัญหาสอบถามได้ที่</a>
        </h2>
        <form id="contactForm" style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>ชื่อ</label>
            <input
              id="name"
              type="text"
              placeholder="กรุณากรอกชื่อ"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>อีเมล</label>
            <input
              id="email"
              type="email"
              placeholder="กรุณากรอกอีเมล"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="message" style={styles.label}>ข้อความ</label>
            <textarea
              id="message"
              placeholder="กรุณากรอกข้อความของคุณ"
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.submitButton}>ส่งข้อความ</button>
        </form>

        {/* ข้อมูลติดต่อเพิ่มเติม */}
        <div style={styles.contactInfo}>
          <h3 style={styles.contactTitle}>ข้อมูลติดต่อ</h3>
          <p><strong>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</strong></p>
          <p>2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300</p>
          <p><strong>โทรศัพท์</strong>: 0 5321 3061 , 0 5321 3144 , 0 5321 9175</p>
          <p><strong>แฟกซ์</strong>: 0 5340 8223</p>
          <p><strong>Facebook</strong>: <a href="https://www.facebook.com/lannapolyCNX" style={styles.link} target="_blank">www.facebook.com/lannapolyCNX</a></p>
          <p><strong>E-mail</strong>: <a href="mailto:lannapoly@lannapoly.ac.th" style={styles.link}>lannapoly@lannapoly.ac.th</a></p>
        </div>
      </div>

      <div style={styles.mapContainer}>
        <h3 style={styles.mapTitle}>แผนที่</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8195035975674!2d98.99356681534507!3d18.79527888703562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2dbf9ffb8a2f%3A0xd56ba941c6f0669!2s123%20%2C%20%20เชียงใหม่%2C%20ประเทศไทย!5e0!3m2!1sen!2sus!4v1601594784353!5m2!1sen!2sus"
          width="100%" 
          height="300"  // เปลี่ยนความสูงของแผนที่ให้เล็กลง
          style={styles.mapIframe}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    flex: 1,
    maxWidth: "500px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",  // Light shadow for modern look
    marginRight: "20px",
    minWidth: "300px", // Ensure form is not too small on smaller screens
  },
  title: {
    fontSize: "1.8em",
    marginBottom: "25px",
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  },
  linkHover: {
    color: "#0056b3",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // Space between elements
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1em",
    color: "#333",
    marginBottom: "8px",
    fontWeight: "400",
  },
  input: {
    padding: "12px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    transition: "border 0.3s ease",
    marginBottom: "15px",
  },
  textarea: {
    padding: "12px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
    height: "200px",  // เพิ่มความสูงของ textarea ให้ใหญ่ขึ้น
    resize: "vertical",
  },
  submitButton: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.1em",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
  contactInfo: {
    marginTop: "30px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  },
  contactTitle: {
    fontSize: "1.3em",
    marginBottom: "20px",
    fontWeight: "500",
    color: "#333",
  },
  mapContainer: {
    flex: 1,
    maxWidth: "600px",
    position: "relative",
  },
  mapTitle: {
    fontSize: "1.3em",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "500",
  },
  mapIframe: {
    border: "none",
    borderRadius: "8px",
    width: "100%",  // ทำให้แผนที่มีความกว้างเต็มที่
    height: "300px",  // ลดความสูงของแผนที่ให้พอดี
  },
};

export default Contact;
