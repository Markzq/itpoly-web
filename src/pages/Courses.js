import React, { useState, useEffect } from "react";

const Courses = () => {
  const [pdfLinks, setPdfLinks] = useState([]);

  useEffect(() => {
    // โหลดลิงก์ไฟล์จาก localStorage
    const savedLinks = JSON.parse(localStorage.getItem("pdfLinks"));
    if (savedLinks) {
      setPdfLinks(savedLinks);
    }
  }, []);

  const handleRemoveLink = (index) => {
    const updatedLinks = [...pdfLinks];
    updatedLinks.splice(index, 1);
    setPdfLinks(updatedLinks);

    // อัปเดต localStorage หลังจากลบลิงก์
    localStorage.setItem("pdfLinks", JSON.stringify(updatedLinks));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>หลักสูตรที่เปิดสอน</h1>
      <p style={styles.description}>
        เรามีหลักสูตรหลากหลายที่ตอบสนองความต้องการของนักศึกษาตั้งแต่นักศึกษาที่จบชั้น มัธยมศึกษาปีที่ 3 - 6 เลย
      </p>
      <div style={styles.courseList}>
        <h2 style={styles.subtitle}>หลักสูตรที่เปิดสอน:</h2>
        <ul style={styles.list}>
          <li>ประกาศนียบัตรวิชาชีพ (ปวช.) (Vocational Certificate)</li>
          <li>ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) (High vocational Certificate)</li>
        </ul>
      </div>

      {/* แสดงลิงก์ที่ผู้ใช้เพิ่ม */}
      <div style={styles.pdfContainer}>
        {pdfLinks.map((link, index) => (
          <div key={index} style={styles.pdfItem}>
            <div style={styles.pdfHeader}>
              <p style={styles.pdfName}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </p>
              <button
                style={styles.removeButton}
                onClick={() => handleRemoveLink(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "15px",
    color: "#28a745",
  },
  description: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  courseList: {
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
  pdfContainer: {
    marginTop: "10px",
  },
  pdfItem: {
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#fff",
  },
  pdfHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pdfName: {
    fontSize: "1.2em",
    margin: 0,
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Courses;
