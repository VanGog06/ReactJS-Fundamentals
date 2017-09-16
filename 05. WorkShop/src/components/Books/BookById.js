import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import toastr from 'toastr';

import Book from './Book';
import BookStore from '../../stores/BookStore';
import Comments from '../Comments';
import CommentForm from '../common/CommentForm';


class BookById extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: { author: {} },
      comment: '',
      error: '',
      id: this.props.match.params.id
    };

    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEditBook = this.handleEditBook.bind(this);

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({ comment: value });
  }

  saveComment(event) {
    event.preventDefault();

    const comment = this.state.comment;
    let error = this.validateComment(comment);

    if (error) {
      toastr.error(error);
      this.setState({ error });
      return;
    }

    let book = this.state.book;
    book.comments.push({ 'name': this.state.comment });

    this.setState({
      book: book
    });
  }

  validateComment(comment) {
    if (comment.length === 0) {
      return 'Comment cannot be empty!';
    }

    return false;
  }

  handleEditBook() {
    this.props.history.push(`/books/edit/${this.state.id}`);
  }

  render() {
    if (this.state.err) {
      return <Redirect to='/books/all' />
    }

    let commentObj = {};
    let comments = [];
    let counter = 0;

    for (let com in this.state.book.comments) {
      commentObj = this.state.book.comments[com];
      comments.push(this.state.book.comments ? <Comments key={counter++} comments={commentObj} /> : <div>No comments!</div>);
    }

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
        <button onClick={this.handleEditBook}>Edit</button>
        <CommentForm
          onChange={this.handleInputChange.bind(this)}
          onClick={this.saveComment.bind(this)}
        />
      </div>
    );
  }
}

export default BookById;