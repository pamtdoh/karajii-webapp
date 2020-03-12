import React from 'react';
import { connect } from 'react-redux';

import Landing from '../components/home/Landing';

import Catalogue from '../components/home/Catalogue'

const HomePage = ({ user }) => {
  if (user == null) {
    return (
      <div className="mt-5 text-center">
        <h1>Welcome to KARAJII Movies</h1>
        <Landing />
        <Catalogue />
      </div>
    )  
  } else {
    return <h1>Hi {user.username}!, eskrim</h1>
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(HomePage)