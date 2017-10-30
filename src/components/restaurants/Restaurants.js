import React, { Component } from 'react';
import Restaurant from './Restaurant'
// linking rest. file to list restaurants

class Restaurants extends Component {
  
  render() {

      let restaurants = this.props.store.getState().restaurants.map(restaurant => {

        return <Restaurant
                  restaurant={restaurant}
                  store={this.props.store}
                  key={restaurant.id}
                />
              })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
