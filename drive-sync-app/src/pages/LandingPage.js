import React from 'react';
import { Container, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="text-center mt-5">
      <h1>DriveSync – Your cloud documents, reimagined.</h1>
      <p>All your cloud documents in one place without downloads.</p>
      <Button variant="primary">Get Started. It's FREE</Button>
    </Container>
  );
};

export default LandingPage;
