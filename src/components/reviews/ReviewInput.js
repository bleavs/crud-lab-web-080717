import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state={
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({
      text: ''
    })
  }


  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
            <input type="submit" />
          </form>

          <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;
