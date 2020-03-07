import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BaseApi, setToken } from './api';
import { login } from './actions';

function LoginForm({ dispatch }) {
  const [loginData, setLoginData] = useState({username: "", password: ""});
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const submitLoginData = async () => {
    try {
      const response = await BaseApi.post('/auth', loginData);
      setToken(response.data.access_token);

      const userResponse = await BaseApi.get('/user');
      dispatch(login(userResponse.data));

      history.push('/');
    } catch (e) {
      setErrorMessage("Invalid credentials");
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    if (loginData.username !== "" && loginData.password !== "") {
      submitLoginData();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="string"
          placeholder="Username"
          value={loginData.username}
          onChange={event => setLoginData({...loginData, username: event.target.value})} />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={event => setLoginData({...loginData, password: event.target.value})} />
      </Form.Group>
      {errorMessage !== "" ? <Form.Text className="text-danger my-1">{errorMessage}</Form.Text> : null}
      <Button type="submit" className="ml-auto btn-warning">
        Log In
      </Button>
    </Form>
  );
}

function LoginPage( {dispatch} ) {
  return (
    <div className="d-flex justify-content-center m-5">
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <LoginForm dispatch={dispatch} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default connect()(LoginPage);