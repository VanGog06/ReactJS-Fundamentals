import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import hotelActions from '../actions/HotelActions';
import HotelData from '../data/HotelData';

class HotelStore extends EventEmitter {
  create(hotel) {
    HotelData
      .create(hotel)
      .then(data => this.emit(this.eventTypes.HOTEL_CREATED, data));
  }

  all(page) {
    page = page || 1;
    HotelData
      .all(page)
      .then(data => this.emit(this.eventTypes.HOTELS_FETCHED, data));
  }

  getHotelById(id) {
    HotelData
      .getHotelById(id)
      .then(data => this.emit(this.eventTypes.FETCHED_HOTEL_BY_ID, data));
  }

  createReview(review, id) {
    HotelData
      .createReview(review, id)
      .then(data => this.emit(this.eventTypes.REVIEW_CREATED, data));
  }

  allReviews(id) {
    HotelData
      .allReviews(id)
      .then(data => this.emit(this.eventTypes.FETCHED_REVIEWS, data));
  }

  handleAction(action) {
    switch(action.type) {
      case hotelActions.types.CREATE_HOTEL:
        this.create(action.hotel);
        break;
      case hotelActions.types.ALL_HOTELS:
        this.all(action.page);
        break;
      case hotelActions.types.GET_HOTEL_BY_ID:
        this.getHotelById(action.id);
        break;
      case hotelActions.types.CREATE_REVIEW:
        this.createReview(action.review, action.id);
        break;
      case hotelActions.types.ALL_REVIEWS:
        this.allReviews(action.id);
        break;
      default:
        break;
    }
  }
}

let hotelStore = new HotelStore();

hotelStore.eventTypes = {
  HOTEL_CREATED: 'hotel_created',
  HOTELS_FETCHED: 'hotels_fetched',
  FETCHED_HOTEL_BY_ID: 'fetched_hotel_by_id',
  REVIEW_CREATED: 'review_created',
  FETCHED_REVIEWS: 'fetched_reviews'
};

dispatcher.register(hotelStore.handleAction.bind(hotelStore));

export default hotelStore;