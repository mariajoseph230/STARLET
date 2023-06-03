import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.paragraph}>
        We would love to hear from you! Please feel free to reach out to us with any questions, feedback, or inquiries.
      </p>
      <div style={styles.contactInfo}>
        <p><strong>Email:</strong> example@example.com</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
        <p><strong>Address:</strong> 123 Main Street, City, State, Country</p>
      </div>
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
  paragraph: {
    marginBottom: '20px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Contact;
