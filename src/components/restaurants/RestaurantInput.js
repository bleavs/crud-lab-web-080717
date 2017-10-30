import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //dispatching input to store then setting text state blank again
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })

    this.setState({
      text: ''
    })

  }

  // setting value of text state each time input changes -- to persist text to store on submission -- then state of text is cleared on submission
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })

  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />

        </form>
      </div>
    );
  }
};

export default RestaurantInput;
