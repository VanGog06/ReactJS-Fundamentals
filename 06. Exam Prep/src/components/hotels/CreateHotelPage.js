import React, { Component } from 'react';
import toastr from 'toastr';

import FormHelpers from '../common/form/FormHelpers';
import CreateHotelForm from './CreateHotelForm';
import hotelActions from '../../actions/HotelActions';
import HotelStore from '../../stores/HotelStore';

class CreateHotelPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotel: {
        name: 'The Big Boss',
        location: 'Gorna Malina',
        description: 'This is a 5 star hotel located in Gorna Malina.',
        numberOfRooms: 14,
        image: 'http://dreamatico.com/data_images/hotels/hotels-4.jpg',
        parkingSlots: 12
      },
      error: ''
    };

    this.handleHotelCreated = this.handleHotelCreated.bind(this);

    HotelStore.on(
      HotelStore.eventTypes.HOTEL_CREATED,
      this.handleHotelCreated
    );
  }

  componentWillUnmount() {
    HotelStore.removeListener(
      HotelStore.eventTypes.HOTEL_CREATED,
      this.handleHotelCreated
    );
  }

  handleHotelChange(event) {
    FormHelpers.handleFormChange.bind(this)(event, 'hotel');
  }

  handleHotelForm(event) {
    event.preventDefault();

    if (this.validateHotel()) {
      let error = this.validateHotel();
      this.setState({ error });
    }

    hotelActions.create(this.state.hotel);
  }

  validateHotel() {
    const hotel = this.state.hotel;
    let error = '';

    if (hotel.name.length === 0) {
      error = 'Hotel\'s name cannot be empty!';
      return error;
    }

    if (hotel.location.length === 0) {
      error = 'Hotel\'s location cannot be empty!';
      return error;
    }

    if (hotel.description.length === 0) {
      error = 'Hotel\'s description cannot be empty!';
      return error;
    }

    if (hotel.numberOfRooms <= 0) {
      error = 'Hotel\'s rooms cannot be 0 or negative number!';
      return error;
    }

    if (hotel.image.length === 0) {
      error = 'Hotel\'s image cannot be empty!';
    }

    if (hotel.parkingSlots < 0) {
      this.setState({ hotel: { parkingSlots: 0 } });
    }

    return error;
  }

  handleHotelCreated(data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data);
      this.setState({ error: firstError });
    } else {
      toastr.success('Hotel Added!');
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="create-hotel-title">Create Your Hotel</h1>
        <CreateHotelForm
          error={this.state.error}
          hotel={this.state.hotel}
          onChange={this.handleHotelChange.bind(this)}
          onSave={this.handleHotelForm.bind(this)}
        />
      </div>
    );
  }
}

export default CreateHotelPage;