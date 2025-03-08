import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PurposeRoleSelection = () => {
  const [purpose, setPurpose] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the selected values (e.g., save to state or context, then navigate)
    console.log('Purpose:', purpose, 'Role:', role);
  };

  return (
    <Container className="mt-5">
      <h2>Purpose & Role Selection</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>What would you like to use the app for?</Form.Label>
          <Form.Check
            type="radio"
            label="Work"
            name="purpose"
            value="work"
            onChange={(e) => setPurpose(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Personal"
            name="purpose"
            value="personal"
            onChange={(e) => setPurpose(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="School"
            name="purpose"
            value="school"
            onChange={(e) => setPurpose(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>What is your role?</Form.Label>
          <Form.Check
            type="radio"
            label="Business Owner"
            name="role"
            value="owner"
            onChange={(e) => setRole(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Employee"
            name="role"
            value="employee"
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Continue
        </Button>
      </Form>
    </Container>
  );
};

export default PurposeRoleSelection;
