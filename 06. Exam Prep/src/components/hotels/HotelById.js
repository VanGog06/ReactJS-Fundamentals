import React, { Component } from 'react';
import toastr from 'toastr';

import ReviewForm from './ReviewForm';
import hotelActions from '../../actions/HotelActions';
import HotelStore from '../../stores/HotelStore';
import FormHelpers from '../common/form/FormHelpers';
import Auth from '../users/Auth';
import Review from './Review';

class HotelById extends Component {
  constructor(props) {
    super(props);

    let id = this.props.match.params.id;

    this.state = {
      hotel: {
        name: '',
        location: '',
        description: '',
        numberOfRooms: '',
        image: '',
        parkingSlots: ''
      },
      id: id,
      review: {
        rating: '',
        comment: '',
        user: ''
      },
      reviews: [],
      error: ''
    };

    this.handleReceivedHotel = this.handleReceivedHotel.bind(this);
    this.handleCreatedReview = this.handleCreatedReview.bind(this);
    this.handleFetchedReviews = this.handleFetchedReviews.bind(this);

    HotelStore.on(
      HotelStore.eventTypes.FETCHED_HOTEL_BY_ID,
      this.handleReceivedHotel
    );

    HotelStore.on(
      HotelStore.eventTypes.REVIEW_CREATED,
      this.handleCreatedReview
    );

    HotelStore.on(
      HotelStore.eventTypes.FETCHED_REVIEWS,
      this.handleFetchedReviews
    );
  }

  componentWillMount() {
    let id = this.state.id;

    hotelActions.getHotelById(id);
    hotelActions.getReviews(id);

    this.setState({
      review: {
        user: Auth.getUser().name,
        rating: 1
      }
    });
  }

  componentWillUnmount() {
    HotelStore.removeListener(
      HotelStore.eventTypes.FETCHED_HOTEL_BY_ID,
      this.handleReceivedHotel
    );

    HotelStore.removeListener(
      HotelStore.eventTypes.REVIEW_CREATED,
      this.handleCreatedReview
    );

    HotelStore.removeListener(
      HotelStore.eventTypes.FETCHED_REVIEWS,
      this.handleFetchedReviews
    );
  }

  handleReceivedHotel(data) {
    this.setState({ hotel: data });
  }

  handleRatingChange(event) {
    FormHelpers.handleFormChange.bind(this)(event, 'review');
  }

  saveReview(event) {
    event.preventDefault();

    if (this.validateReview()) {
      let error = this.validateReview();
      this.setState({ error });
      return;
    }

    hotelActions.createReview(this.state.review, this.state.id);
  }

  validateReview() {
    let review = this.state.review;
    let error = '';
    console.log(this.state.review);

    if (Number(review.rating) < 1 || Number(review.rating) > 5) {
      error = 'Rating can be between 1 and 5!';
      return error;
    }

    return error;
  }

  handleCreatedReview(data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data);
      this.setState({ error: firstError });
    } else {
      toastr.success(data.message);
      hotelActions.getReviews(this.state.id);
    }
  }

  handleFetchedReviews(data) {
    this.setState({
      reviews: data
    });
  }

  render() {
    let hotel = this.state.hotel;
    let reviews = 'There are currently no reviews for this product!';

    if (this.state.reviews.length > 0) {
      reviews = this.state.reviews.map((review, index) => (
        <Review key={index} review={review} />
      ));
    }

    return (
      <div className='hotel-details'>
        <h1>Hotel Details:</h1>
        <h3>{hotel.name}</h3>
        <img className='hotel-image' src={hotel.image} alt={`Hotel ${hotel.id}`} />
        <p>{hotel.description}</p>
        <p>Location: {hotel.location}</p>
        <p>Rooms: {hotel.numberOfRooms}</p>
        <p>Parking Slots: {hotel.parkingSlots}</p>
        <h1>Reviews:</h1>
        <div className="reviews">
          {reviews}
        </div>
        <ReviewForm
          error={this.state.error}
          onChange={this.handleRatingChange.bind(this)}
          onSave={this.saveReview.bind(this)}
        />
      </div>
    );
  }
}

export default HotelById;