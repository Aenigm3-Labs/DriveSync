import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container className="landing-container">
      <h1 className="landing-title">DriveSync – Your cloud documents, reimagined.</h1>
      <p className="landing-text">
        All your cloud documents in one place without downloads.
      </p>
      <Link to="/signup">
        <Button className="landing-button">Get Started. It's FREE</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
