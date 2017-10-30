import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    let reviews =[]

    if (this.props.store.getState().reviews) {
      reviews = this.props.store.getState().reviews.filter((review) => {
        return review.restaurantId === this.props.restaurantId
      })
    }


    return (
      <ul>

        {reviews.map((review, index) => {
          return <Review key={index} review={review} store={this.props.store} />
        })}

      </ul>
    );
  }
};

export default Reviews;
