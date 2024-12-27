import React from "react";

const Courses = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>หลักสูตรที่เปิดสอน</h1>
      <p style={styles.description}>
        เรามีหลักสูตรหลากหลายที่ตอบสนองความต้องการของนักศึกษาในทุกระดับ
      </p>
      <div style={styles.courseList}>
        <h2 style={styles.subtitle}>หลักสูตรที่เปิดสอน:</h2>
        <ul style={styles.list}>
          <li>ปริญญาตรี (Bachelor's Degree)</li>
          <li>ปริญญาโท (Master's Degree)</li>
          <li>หลักสูตรระยะสั้นเพื่อพัฒนาทักษะ</li>
        </ul>
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
};

export default Courses;
