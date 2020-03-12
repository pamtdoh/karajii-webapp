import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HistoryList({ history }) {
  return (
    <div>
      <h2>History</h2>
      <Row>
        {history.map(entry => <HistoryEntry
          movie_name={entry.movie_name}
          cover_image={entry.cover_image}
          start_date={entry.start_date}
          end_date={entry.end_date}
          status={entry.status} />)}
      </Row>
    </div>

  );
}

function HistoryEntry({ movie_name, cover_image, start_date, end_date, status }) {
  return (
    <Col sm={6} md={4} className="mt-3">
      <Card>
        <Card.Img variant="top" src={cover_image} fluid />
        <Card.Body>
          <Card.Title>{movie_name}</Card.Title>
          <Card.Text>
            <p><b>Status:</b> {status}</p>
            <p>{end_date}</p>
            <p>{start_date}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default HistoryList;