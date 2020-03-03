import React from 'react';
import { connect } from 'react-redux';

const HomePage = ({ user }) => {
  if (user == null) {
    return <h1>aku mau terbang</h1>
  } else {
    return <h1>heh {user.username}, eskrim</h1>
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default connect(mapStateToProps)(HomePage)