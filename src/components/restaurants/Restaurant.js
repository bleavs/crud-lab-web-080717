import React, { Component } from 'react';

import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }



  render() {

    const { restaurant } = this.props

    return (
      <div>
        <li>{restaurant.text}</li>
        <button onClick={this.handleDelete}>Delete Restaurant</button>
        <ReviewInput store={this.props.store} restaurantId={restaurant.id}/>
      </div>
    );
  }
};

export default Restaurant;
