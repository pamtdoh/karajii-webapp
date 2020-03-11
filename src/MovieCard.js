import React, { Component } from "react";
import { Card, Button, Col } from 'react-bootstrap';

export class MovieCard extends Component {
  render() {
    return (
      <Col lg={3} md={4}>
        <Card>
          <Card.Img variant="top" src="../img/1.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MovieCard;
