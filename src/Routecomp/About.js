import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p>Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products and services to our customers.</p>
      <p>Our mission is to create innovative solutions that make a positive impact on people's lives. We strive to exceed customer expectations and deliver exceptional value.</p>
      <p>With years of experience in the industry, we have built a strong reputation for our commitment to excellence and customer satisfaction. Our team consists of skilled professionals who are driven by creativity and a desire to make a difference.</p>
      <p>At our company, we value integrity, collaboration, and continuous improvement. We are constantly exploring new ideas and technologies to stay ahead of the curve and meet the evolving needs of our customers.</p>
      <p>Thank you for choosing us as your trusted partner. We look forward to serving you and exceeding your expectations.</p>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
};

export default AboutUs;

