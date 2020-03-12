import React, { useState } from "react";
import {
  Row,
  Dropdown,
  DropdownButton,
  Button,
  ButtonToolbar,
  Jumbotron,
  Container,
  FormGroup,
  FormLabel,
  Form
} from "react-bootstrap";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War"
];

const SearchForm = ({ submitQuery }) => {
  const [searchQuery, setSearchQuery] = useState({
    keyword: "",
    genre: ""
  });

  return (
    // <div className="jumbotron jumbotron-fluid mt-5">
    //   <div className="container">
    //     <h1 className="display-4 mb-3">
    //       <i className="fa fa-search" /> Search for movies...
    //     </h1>

    //   </div>
    // </div>

    <Jumbotron fluid>
      <Container>
        <h1>Welcome to Karajii Movies</h1>
        <p>This is the best movie rental service.</p>
        <Form.Group controlId="formMovies">
          <Form.Control type="search  " placeholder="Search movies..." onChange={event =>
            setSearchQuery({ ...searchQuery, keyword: event.target.value })
          }/>
          <Form.Text className="text-muted">
            We'll find your favorite movies. Sit back, chill, and relax...
          </Form.Text>
          <Row className="justify-content-md-center mt-3">
            <ButtonToolbar>
              <Button
                variant="outline-warning"
                className="mr-3"
                onClick={submitQuery}
              >
                Search
              </Button>

              <DropdownButton
                title={searchQuery.genre || "Genre"}
                variant="warning"
              >
                {genres.map(x => (
                  <Dropdown.Item
                    onClick={() => setSearchQuery({ ...searchQuery, genre: x })}
                  >
                    {x}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </ButtonToolbar>
          </Row>
        </Form.Group>
      </Container>
    </Jumbotron>

    // <form id="searchForm">
    // <input
    //   type="text"
    //   className="form-control"
    //   name="searchText"
    //   placeholder="Search Movies..."
    //   onChange={event => setSearchQuery({...searchQuery, keyword: event.target.value})}
    // />
    // <Row className="justify-content-md-center mt-3">
    //   <ButtonToolbar>
    //     <Button variant="outline-warning" className="mr-3" onClick={submitQuery}>
    //       Search
    //     </Button>

    //     <DropdownButton title={searchQuery.genre || "Genre"} variant="warning">
    //       {genres.map(x => (
    //         <Dropdown.Item onClick={() => setSearchQuery({...searchQuery, genre: x})}>{x}</Dropdown.Item>
    //       ))}
    //     </DropdownButton>
    //   </ButtonToolbar>
    // </Row>
    // </form>
  );
};

export default SearchForm;
