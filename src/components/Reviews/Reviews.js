import axios from 'axios';
import React, { Component } from 'react';
import Container from '../Container';

class ReviewsComponent extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const reviewsGetApi = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=17f34524669c2658ba6f6a8fb0e96e0c`,
    );
    console.log('reviews', reviewsGetApi.data.results);
    this.setState({ reviews: reviewsGetApi.data.results });
  }
  render() {
    const { reviews } = this.state;

    return (
      <Container>
        <ul>
          {reviews.length ? (
            reviews.map(review => (
              <li key={review.id}>
                <h3>Author {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <h4>We don't have any reviews for this movies</h4>
          )}
        </ul>
      </Container>
    );
  }
}

export default ReviewsComponent;
