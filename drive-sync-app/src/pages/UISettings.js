import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const UISettings = () => {
  const [mode, setMode] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the selected mode (e.g., in state or localStorage) and navigate to the next step.
    console.log('Selected UI mode:', mode);
  };

  return (
    <Container className="mt-5">
      <h2>Choose Your UI Mode</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Check
          type="radio"
          label="Normal Mode"
          name="mode"
          value="normal"
          checked={mode === 'normal'}
          onChange={(e) => setMode(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="ADHD Mode"
          name="mode"
          value="adhd"
          checked={mode === 'adhd'}
          onChange={(e) => setMode(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="Dyslexia Mode"
          name="mode"
          value="dyslexia"
          checked={mode === 'dyslexia'}
          onChange={(e) => setMode(e.target.value)}
        />
        <Button variant="primary" type="submit" className="mt-3">
          Confirm
        </Button>
      </Form>
    </Container>
  );
};

export default UISettings;
