import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import { BaseApi } from './api';
import { login } from './actions';

import Footer from './Footer';

function App({ dispatch }) {
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await BaseApi.get('user');
      dispatch(login(response.data));
    };

    if (localStorage.getItem('token')) {
      fetchUserData();
    }
  });

  return (
    <Container fluid="true" className="bg-warning">
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default connect()(App);