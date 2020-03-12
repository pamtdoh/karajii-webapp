import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

function NavBar({ dispatch, user }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Link to="/">
        <Navbar.Brand><b>KARAJII</b></Navbar.Brand>
      </Link>
      <Nav className="mr-auto sticky-top">
        <Link to="/heh" className="nav-link">
          Ganteng gw
        </Link>
      </Nav>
      {user == null ? (
        <Nav>
          <Link to="/login" className="nav-link">
            Log In
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </Nav>
      ) : (
        <Nav>
          <Link to={"/user/" + user.username} className="nav-link">
            {user.username}
          </Link>
          <Link to="/" className="nav-link" onClick={handleLogout}>
            Log Out
          </Link>
        </Nav>
      )}
    </Navbar>
  );
}

const mapStateToProps = state => ({
  user: state.currentUser
});

export default connect(mapStateToProps)(NavBar);