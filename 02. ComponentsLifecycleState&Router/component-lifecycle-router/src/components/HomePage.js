import React, { Component } from 'react';
import TitleComponent from './sub-components/TitleComponent';
import HomePageBooks from './sub-components/HomePageBooks';

import data from '../data';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    data
      .getBooks()
      .then(books => {
        this.setState({
          books: books,
        });
      });
  }

  render() {
    return (
      <div>
        <TitleComponent title="Last 6 added books" />
        <HomePageBooks books={this.state.books} />
      </div>
    );
  }
}

export default HomePage