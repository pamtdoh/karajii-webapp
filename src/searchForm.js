import React, { Component } from 'react';

export class searchForm extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container"> 
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for movies...
                    </h1>
                    <form id="searchForm">
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies..."
                        />
                        <button type="submit" className="btn btn-warning btn-bg mt-3">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default searchForm;
