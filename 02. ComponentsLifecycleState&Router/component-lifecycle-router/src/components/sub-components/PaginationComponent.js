import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

import Helpers from '../../utilities/Helpers';

class PaginationComponent extends Component {
  render() {
    let items = Math.floor(Helpers.paginationItems(this.props.size));

    return (
      <div>
        <Pagination
          bsSize="medium"
          items={items}
          activePage={this.props.activePage}
          onSelect={this.props.handleSelect} />
        <br />
      </div>
    );
  }
}

export default PaginationComponent;