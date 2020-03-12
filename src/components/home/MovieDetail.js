import React from "react";
import { Card, Button, Grid, Image, Segment } from "semantic-ui-react";

const MovieDetail = ({
  rentMovie,
  title,
  coverImage,
  year,
  genre,
  duration,
  stock,
  price,
  summary
}) => {
  return (
    <Grid className="mt-3">
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={5}>
          <Card style={{ width: "100%" }}>
            <Image src={coverImage} />
            <Card.Content>
              <Card.Header><b>Title</b></Card.Header>
              <Card.Meta>
                <div className="year mt-2">2015</div>
                <Button className="mt-3" color="red" onClick={rentMovie}>
                  Rent
                </Button>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={2}>
          <Segment>Title</Segment>
          <Segment>Year</Segment>
          <Segment>Genre</Segment>
          <Segment>Duration</Segment>
          <Segment>Stock</Segment>
          <Segment>Price</Segment>
        </Grid.Column>
        <Grid.Column width={3}>
          <Segment>{title}</Segment>
          <Segment>{year}</Segment>
          <Segment>{genre}</Segment>
          <Segment>{duration}</Segment>
          <Segment>{stock}</Segment>
          <Segment>{price}</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <div><b>Summary</b></div>
            {summary}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MovieDetail;
