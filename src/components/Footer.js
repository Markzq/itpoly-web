import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.text}>© 2024 My Small Web. All Rights Reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
    marginTop: "auto",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    marginBottom: "10px",
    fontSize: "14px",
  },
  socialLinks: {
    marginTop: "10px",
  },
  socialLink: {
    textDecoration: "none",
    color: "white",
    margin: "0 10px",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  socialLinkHover: {
    color: "#007BFF", // เพิ่มสีเมื่อมีการ hover
  },
};

export default Footer;
