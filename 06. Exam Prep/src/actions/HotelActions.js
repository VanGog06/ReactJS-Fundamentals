import dispatcher from '../dispatcher';

const HotelActions = {
  types: {
    CREATE_HOTEL: 'CREATE_HOTEL',
    ALL_HOTELS: 'ALL_HOTELS',
    GET_HOTEL_BY_ID: 'GET_HOTEL_BY_ID',
    CREATE_REVIEW: 'CREATE_REVIEW',
    ALL_REVIEWS: 'ALL_REVIEWS'
  },
  create(hotel) {
    dispatcher.dispatch({
      type: this.types.CREATE_HOTEL,
      hotel
    });
  },
  all(page) {
    page = page || 1;
    dispatcher.dispatch({
      type: this.types.ALL_HOTELS,
      page
    });
  },
  getHotelById(id) {
    dispatcher.dispatch({
      type: this.types.GET_HOTEL_BY_ID,
      id
    });
  },
  createReview(review, id) {
    dispatcher.dispatch({
      type: this.types.CREATE_REVIEW,
      review,
      id
    });
  },
  getReviews(id) {
    dispatcher.dispatch({
      type: this.types.ALL_REVIEWS,
      id
    });
  }
};

export default HotelActions;