import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { CardSubtitle } from "react-bootstrap/Card";

export class Catalogue extends Component {
  render() {
    let cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(<MovieCard/>)
    }
    return <Row>{cards}</Row>
  }
}

export default Catalogue;
