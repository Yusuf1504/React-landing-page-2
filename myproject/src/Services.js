import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Services.css';

function Services() {
  return (

    <div>
    <div className="d-flex justify-content-center">
        <h1>Services</h1>
    </div>
    <>
    <div className="Service-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1>Welcome to Our Website</h1>
            <p>Explore Everywhere by simply Landing our pages.</p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
    </div>

  );
}

export default Services;
