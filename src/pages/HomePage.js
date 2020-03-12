import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/home/SearchForm';
import Catalogue from '../components/home/Catalogue'
import { fetchCatalogue } from '../actions';

const HomePage = ({ user }) => {
  // useEffect(() => {
  //   dispatch(fetchCatalogue(keyword, genre))
  // })

  if (user == null) {
    return (
      <div className="mt-5 text-center">
        <h1>Welcome to KARAJII Movies</h1>
        <SearchForm />
        <Catalogue />
      </div>
    )  
  } else {
    return <h1>Hi {user.username}!, eskrim</h1>
  }
}

export default HomePage;