import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import TitleComponent from './sub-components/TitleComponent';

import data from '../data';

class AuthorDetailsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: {},
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    data
      .getAuthors()
      .then(authors => {
        let author = authors.find(author => {
          return Number(author.id) === Number(this.state.id);
        });

        this.setState({
          author: author
        });
      });
  }

  render() {
    let author = this.state.author;

    return (
      <Jumbotron>
        <TitleComponent title="Author Details" />
        <h3><strong>Name:</strong> {author.name}</h3>
        <h3><strong>Books:</strong> {author.books}</h3>
      </Jumbotron>
    );
  }
}

export default AuthorDetailsComponent