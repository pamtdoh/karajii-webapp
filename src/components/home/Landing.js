import React, { Component } from 'react';

import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';

export class Landing extends Component {
    render() {
        return (
            <div className="container">
                <SearchForm />
                <MovieDetail />
            </div>
        )
    }
}

export default Landing;

