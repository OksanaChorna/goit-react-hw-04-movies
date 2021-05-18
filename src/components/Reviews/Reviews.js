import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import moviesApi from '../../services/moviesApi';

class ReviewsComponent extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesApi.fetchMovieReviews(movieId).then(({ results }) => {
      this.setState({ reviews: [...results] });
    });
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

ReviewsComponent.propTypes = {
  movieId: PropTypes.string,
};

export default ReviewsComponent;
