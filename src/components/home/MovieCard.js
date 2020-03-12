import React, { Component } from "react";
import { Card, Button, Col } from 'react-bootstrap';

export class MovieCard extends Component {
  render() {
    return (
      <Col lg={3} md={4}>
        <Card className="mt-3">
          <Card.Img className="mt-3 mb-3" variant="top" src="../img/1.jpg" />
          <Card.Body>
            <Card.Title>Movie Title</Card.Title>
            <Button variant="danger">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MovieCard;
