import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Helpers from '../../utilities/Helpers';

class BooksComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1
    }
  }

  render() {
    let books = this.props.books;
    let sortCriteria = this.props.sortCriteria;
    let page = this.props.activePage;

    books = Helpers.sortArray(books, sortCriteria);
    books = Helpers.sliceArray(books, (page - 1) * 10, page * 10);

    books = books.map(book => (
      <tr key={book.id}>
        <td>
          <Link className="book-links" to={`/books/${book.id}`}>{book.name}</Link>
        </td>
        <td>
          <Link className="book-links" to={`/authors/${book.id}`}>{book.author}</Link>
        </td>
        <td>{book.description}</td>
        <td>{book.price} лв.</td>
        <td>{book.creationDate.toLocaleDateString()}</td>
      </tr>
    ));

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Description</th>
          <th>Price</th>
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

export default BooksComponent;