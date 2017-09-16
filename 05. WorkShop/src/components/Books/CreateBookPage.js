import React, { Component } from 'react';
import BookForm from '../common/BookForm';
import BookStore from '../../stores/BookStore';

import toastr from 'toastr';

class CreateBookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        title: '',
        description: '',
        price: '',
        author: '',
        image: ''
      },
      error: ''
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const field = target.name;
    const value = target.value;

    let book = this.state.book;
    book[field] = value;

    this.setState({ book });
  }

  saveBook(event) {
    event.preventDefault();

    const book = this.state.book;
    let error = this.validateBook(book);

    if (error) {
      toastr.error(error);
      this.setState({ error });
      return;
    }

    book.comments = [];
    book.date = Date.now();

    BookStore
      .getAllBooks()
      .then(books => {
        book.id = (books.length + 1).toString();

        BookStore.createBook(book);
        this.props.history.push('/books/all');
      });
  }

  validateBook(book) {
    if (book.title.length === 0) {
      return 'Book\'s title cannot be empty!';
    }

    if (book.description.length === 0) {
      return 'Book\'s description cannot be empty!';
    }

    if (book.price.length === 0) {
      return 'Book\'s price cannot be empty!';
    }

    if (book.image.length === 0) {
      return 'Image field cannot be empty!';
    }

    return false;
  }

  render() {
    return (
      <div>
        <h1>Create Book!</h1>
        <BookForm
          error={this.state.error}
          onChange={this.handleInputChange.bind(this)}
          onClick={this.saveBook.bind(this)}
          book={this.state.book}
        />
      </div>
    );
  }
}

export default CreateBookPage;