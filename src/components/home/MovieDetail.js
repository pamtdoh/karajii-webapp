import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const MovieDetail = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="danger">Details</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        
      </Col>
    </Row>
  );
};

export default MovieDetail;
