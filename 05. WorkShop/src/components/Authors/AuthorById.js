import React, { Component } from 'react';
import Author from './Author';
import Book from '../Books/Book';
import AuthorStore from '../../stores/AuthorStore';
import { Redirect } from 'react-router-dom';

class AuthorById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: {},
      id: this.props.match.params.id
    };

    this.handleDeleteAuthor = this.handleDeleteAuthor.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEditBook = this.handleEditBook.bind(this);

    AuthorStore.on('change', this.onChange);
  }

  onChange() {
    let id = this.props.match.params.id;
    this.getAuthor(id);
  }

  componentWillUnmount() {
    AuthorStore.removeListener('change', this.onChange);
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    this.getAuthor(id);
  }

  getAuthor(id) {
    AuthorStore
      .getAuthorById(id)
      .then(author => {
        this.setState({ author: author });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  }

  handleDeleteAuthor() {
    let id = this.props.match.params.id;
    AuthorStore.deleteAuthorById(id);
  }

  handleEditBook() {
    this.props.history.push(`/authors/edit/${this.state.id}`);
  }

  render() {
    if (this.state.err) {
      return <Redirect to='/authors/all' />
    }

    let b = this.state.author.books;
    let books = [];

    for (let index in b) {
      books.push(b[index]);
    }

    books = books.map((book, index) => (
      <Book key={book.id}
            book={book}
            index={book.id} />
    ));

    return (
      <div className="container">
        <h3 className="text-center">Welcome to
          <strong> Books&Authors 2017</strong>
        </h3>
        <Author key={this.state.author.id}
              author={this.state.author}
              index={this.state.author.id} />

        <div className="list-group">
          <h3>Books: </h3>
          {books}
        </div>

        <button onClick={this.handleDeleteAuthor}>Delete</button>
        <button onClick={this.handleEditBook}>Edit</button>
      </div>
    );
  }
}

export default AuthorById;