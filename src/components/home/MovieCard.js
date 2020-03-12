import React, { Component } from "react";
import { Card, Button, Col } from 'react-bootstrap';

const MovieCard = ({ title, cover_image, openMovieDetail }) => {
  return (
    <Col lg={3} md={4}>
      <Card className="mt-3">
        <Card.Img className="mt-3 mb-3" variant="top" src={cover_image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button onClick={openMovieDetail} variant="danger">Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
