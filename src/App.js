import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { BaseApi } from './api';
import { login } from './actions';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

import 'semantic-ui-css/semantic.min.css'

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
        <Route path="/movie" component={MovieDetailPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default connect()(App);