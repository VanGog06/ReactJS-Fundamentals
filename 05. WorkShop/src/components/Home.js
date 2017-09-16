import React, { Component } from 'react';
import BookStore from '../stores/BookStore';
import Books from './Books/Books';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks(0, 6);
  }

  getBooks(start, end) {
    BookStore
      .getAllBooks()
      .then(books => {
        this.setState({
          books: books.sort((a, b) => {
            return b.date.toString().localeCompare(a.date.toString())
          }).slice(start, end)
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Welcome to
          <strong> Books&Authors 2017</strong>
        </h3>
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default Home;