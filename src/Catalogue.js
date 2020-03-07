import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

export class Catalogue extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                        <Col md={2}><MovieCard /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Catalogue
