import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { BaseApi } from './api';

function RegisterForm() {
  const [regData, setRegData] = useState({username: "", password: ""});
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const submitRegData = async () => {
    try {
      const response = await BaseApi.post('/register', regData);
      console.log(response.data);
      history.push('/login');
    } catch (e) {
      setErrorMessage(e.response.data.message);
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    if (regData.username !== "" && regData.password !== "") {
      submitRegData();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="string"
          placeholder="Username"
          value={regData.username}
          onChange={event => setRegData({...regData, username: event.target.value})} />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={regData.password}
          onChange={event => setRegData({...regData, password: event.target.value})} />
      </Form.Group>
      {errorMessage !== "" ? <Form.Text className="text-danger my-1">{errorMessage}</Form.Text> : null}
      <Button type="submit" className="btn-warning align-center">
        Submit
      </Button>
    </Form>
  );
}

function RegisterPage() {
  return (
    <div className="d-flex justify-content-center m-5">
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <RegisterForm />
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegisterPage;