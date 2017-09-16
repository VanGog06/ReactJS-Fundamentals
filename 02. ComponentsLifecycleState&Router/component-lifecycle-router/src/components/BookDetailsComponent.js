import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import TitleComponent from './sub-components/TitleComponent';

import data from '../data';

class BookDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      comments: [],
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    data
      .getBooks()
      .then(books => {
        let book = books.find(book => {
          return Number(book.id) === Number(this.state.id);
        });

        data
          .getComment()
          .then(comments => {
            this.setState({
              book: book,
              comments: comments
            });
          });
      });
  }

  render() {
    let book = this.state.book;
    let comments = this.state.comments.map(comment => (
      <p key={comment.id}>{comment.id}: {comment.comment}</p>
    ));

    return (
      <Jumbotron>
        <TitleComponent title="Book Details" />
        <img src={book.image} alt="Book"/>
        <h3><strong>Title:</strong> {book.name}</h3>
        <h3><strong>Author:</strong> {book.author}</h3>
        <h3><strong>Description:</strong> {book.description}</h3>
        <h3><strong>Price:</strong> {book.price} лв.</h3>
        <h3><strong>Comments:</strong>
          {comments}
        </h3>
      </Jumbotron>
    );
  }
}

export default BookDetailsComponent