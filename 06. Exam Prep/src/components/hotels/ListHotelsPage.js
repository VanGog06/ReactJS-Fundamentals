import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pager } from 'react-bootstrap';
import queryString from 'query-string';

import hotelActions from '../../actions/HotelActions';
import HotelStore from '../../stores/HotelStore';

class ListHotelsPage extends Component {
  constructor(props) {
    super(props);

    const query = queryString.parse(this.props.location.search);
    const page = parseInt(query.page, 10) || 1;

    this.state = {
      hotels: [],
      page: page
    };

    this.handleAllHotels = this.handleAllHotels.bind(this);

    HotelStore.on(
      HotelStore.eventTypes.HOTELS_FETCHED,
      this.handleAllHotels
    );
  }

  componentDidMount() {
    hotelActions.all(this.state.page);
  }

  componentWillUnmount() {
    HotelStore.removeListener(
      HotelStore.eventTypes.HOTELS_FETCHED,
      this.handleAllHotels
    );
  }

  handleAllHotels(data) {
    this.setState({
      hotels: data
    });
  }

  previousPage() {
    let page = this.state.page;
    page--;

    if (page < 1) {
      return;
    }

    this.setState({ page });

    this.props.history.push(`/?page=${page}`);

    hotelActions.all(page);
  }

  nextPage() {
    if (this.state.hotels.length < 10) {
      return;
    }

    let page = this.state.page;
    page++;

    this.setState({ page });

    this.props.history.push(`/?page=${page}`);

    hotelActions.all(page);
  }

  render() {
    let hotels = 'There are currently no hotels';

    if (this.state.hotels.length > 0) {
      hotels = this.state.hotels.map((hotel, index) => (
        <div key={hotel.id} className='container'>
          <Link to={`/hotels/details/${hotel.id}`}>{hotel.id}. {hotel.name}</Link>
        </div>
      ));
    }

    return (
      <div className='hotels'>
        <h1>All Hotels</h1>
        {hotels}
        <Pager>
          <Pager.Item onClick={this.previousPage.bind(this)}>Previous</Pager.Item>
          {' '}
          <Pager.Item onClick={this.nextPage.bind(this)}>Next</Pager.Item>
        </Pager>
      </div>
    );
  }
}

export default ListHotelsPage;