import React, { Component } from 'react';
import Book from './Book';
import BookStore from '../../stores/BookStore';
import Comments from '../Comments';
import { Redirect } from 'react-router-dom';

class BookById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: { author: {} }
    };

    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.onChange = this.onChange.bind(this);

    BookStore.on('change', this.onChange);
  }

  onChange() {
    let id = this.props.match.params.id;
    this.getBook(id);
  }

  componentWillUnmount() {
    BookStore.removeListener('change', this.onChange);
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    this.getBook(id);
  }

  getBook(id) {
    BookStore
      .getBookByid(id)
      .then(book => {
        this.setState({ book: book });
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  }

  handleDeleteBook() {
    let id = this.props.match.params.id;
    BookStore.deleteBookById(id);
  }

  render() {
    if (this.state.err) {
      return <Redirect to='/books/all' />
    }

    let commentObj = {};

    for (let com in this.state.book.comments) {
      commentObj = this.state.book.comments[com];
    }

    let comments = this.state.book.comments ? <Comments comments={commentObj} /> : <div>No comments!</div>;

    return (
      <div className="container">
        <h3 className="text-center">Welcome to
          <strong> Books&Authors 2017</strong>
        </h3>
        <Book key={this.state.book.id}
              book={this.state.book}
              index={this.state.book.id} />
        <div className="list-group">
          {comments}
        </div>
        <button onClick={this.handleDeleteBook}>Delete</button>
      </div>
    );
  }
}

export default BookById;