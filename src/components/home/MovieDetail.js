import React from "react";
import { Icon, Card, Button, Grid, Image, Segment } from "semantic-ui-react";

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
          <Card style={{ width: "100%" }} color="brown" inverted>
            <Image src={coverImage} />
            <Card.Content>
              <Card.Header>
                <b>Title</b>
              </Card.Header>
              <Card.Meta>
                <div className="year mt-2">2015</div>
                <Button className='mt-3' animated="vertical" color="red" onClick={rentMovie} style={{ width: '20%' }}>
                  <Button.Content hidden>Rent $5</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={2}>
          <Segment color="brown" inverted>
            Title
          </Segment>
          <Segment color="brown" inverted>
            Year
          </Segment>
          <Segment color="brown" inverted>
            Genre
          </Segment>
          <Segment color="brown" inverted>
            Duration
          </Segment>
          <Segment color="brown" inverted>
            Stock
          </Segment>
          <Segment color="brown" inverted>
            Price
          </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
          <Segment color="brown">{title}</Segment>
          <Segment color="brown">{year}</Segment>
          <Segment color="brown">{genre}</Segment>
          <Segment color="brown">{duration}</Segment>
          <Segment color="brown">{stock}</Segment>
          <Segment color="brown">{price}</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          <Segment color="brown" inverted>
            <div>
              <b>Summary</b>
            </div>
            {summary}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default MovieDetail;
