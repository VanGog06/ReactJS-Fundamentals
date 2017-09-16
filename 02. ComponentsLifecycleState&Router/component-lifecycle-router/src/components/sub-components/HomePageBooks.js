import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Helpers from '../../utilities/Helpers';
import data from '../../data';

class HomePageBooks extends Component {
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
          books: books
        });
      });
  }

  render() {
    let books = Helpers.sortArray(this.state.books, 'date');
    books = Helpers.sliceArray(books, 0, 6);
    books = books.map(book => (
      <tr key={book.id}>
        <td>
          <Link className="book-links" to={`/books/${book.id}`}>{book.name}</Link>
        </td>
        <td>
          <Link className="book-links" to={`/authors/${book.id}`}>{book.author}</Link>
        </td>
        <td>{book.creationDate.toLocaleDateString()}</td>
      </tr>
    ));

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {books}
        </tbody>
      </Table>
    );
  }
}

export default HomePageBooks;