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
import { fetchCatalogue } from "../../actions";
import { connect } from 'react-redux'

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
    <Jumbotron fluid>
      <Container>
        <h3>This is the best movie rental service.</h3>
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
                variant="outline-danger"
                className="mr-3"
                onClick={() => submitQuery(searchQuery)}
              >
                Search
              </Button>

              <DropdownButton
                title={searchQuery.genre || "Genre"}
                variant="dark"
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
  );
};

const mapDispatchToProps = dispatch => ({
  submitQuery: searchQuery => dispatch(fetchCatalogue(searchQuery.keyword, searchQuery.genre))
})

export default connect(null, mapDispatchToProps)(SearchForm);
