import React from 'react';

const privacy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        At our company, we value the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>
      <p style={styles.paragraph}>
        <strong>Information Collection:</strong> We collect personal information such as name, email address, and phone number when you sign up for an account or use our services.
      </p>
      <p style={styles.paragraph}>
        <strong>Information Usage:</strong> We use your personal information to provide and improve our services, communicate with you, and personalize your experience on our platform.
      </p>
      <p style={styles.paragraph}>
        <strong>Information Protection:</strong> We take appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration.
      </p>
      <p style={styles.paragraph}>
        <strong>Information Sharing:</strong> We do not sell, trade, or rent your personal information to third parties without your consent. We may share your information with trusted partners who assist us in operating our website and providing our services.
      </p>
      <p style={styles.paragraph}>
        <strong>Cookies:</strong> We use cookies to enhance your browsing experience and track usage patterns on our website. You can disable cookies in your browser settings, but please note that certain features may not function properly.
      </p>
      <p style={styles.paragraph}>
        <strong>Updates:</strong> We may update this Privacy Policy from time to time. We encourage you to review the policy periodically for any changes.
      </p>
      <p style={styles.paragraph}>
        If you have any questions or concerns regarding our Privacy Policy, please contact us.
      </p>
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
    marginBottom: '10px',
  },
};

export default privacy;
