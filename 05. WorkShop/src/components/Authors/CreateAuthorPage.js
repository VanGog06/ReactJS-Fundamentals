import React, { Component } from 'react';
import AuthorForm from '../common/AuthorForm';
import AuthorStore from '../../stores/AuthorStore';

import toastr from 'toastr';

class CreateAuthorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: {
        name: '',
        image: '',
        books: []
      },
      error: ''
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const field = target.name;
    const value = target.value;

    let author = this.state.author;
    author[field] = value;

    this.setState({ author });
  }

  saveAuthor(event) {
    event.preventDefault();

    const author = this.state.author;
    let error = this.validateAuthor(author);

    if (error) {
      toastr.error(error);
      this.setState({ error });
      return;
    }

    author.books = author.books.split(',').map(value => {
      return {'title': value}
    });

    AuthorStore
      .getAllAuthors()
      .then(authors => {
        author.id = (authors.length + 1).toString();

        AuthorStore.createAuthor(author);
        this.props.history.push('/authors/all');
      });
  }

  validateAuthor(author) {
    if (author.name.length === 0) {
      return 'Author\'s name cannot be empty!';
    }

    if (author.image.length === 0) {
      return 'Image field cannot be empty!';
    }

    if (author.books.length === 0) {
      return 'Book\'s field cannot be empty!';
    }

    return false;
  }

  render() {
    return (
      <div>
        <h1>Create Author</h1>
        <AuthorForm
          onChange={this.handleInputChange.bind(this)}
          onClick={this.saveAuthor.bind(this)}
          author={this.state.author}
        />
      </div>
    );
  }
}

export default CreateAuthorPage;