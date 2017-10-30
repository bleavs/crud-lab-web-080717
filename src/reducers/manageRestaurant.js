
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      let restaurant = Object.assign({}, action.restaurant, {id: cuid() })
      return {
        ...state,
        restaurants: state.restaurants.concat(restaurant)
      }

    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
        reviews: state.reviews.filter(review => review.restaurantId !== action.id)
      }

    case 'ADD_REVIEW':
      let review = Object.assign({}, action.review, { id: cuid() })

      return {
        ...state,
        reviews: state.reviews.concat(review)
      }

    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
        }

    default:
      return state
    }
    
}
