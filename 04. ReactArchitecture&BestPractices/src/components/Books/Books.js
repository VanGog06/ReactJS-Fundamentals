import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
  render() {

    let books = this.props.books.map((book, index) => {
      return (
        <Book key={book.id}
              book={book}
              index={book.id} />
      );
    });

    return (
      <div className="list-group">
        {books}
      </div>
    );
  }
}

export default Books;