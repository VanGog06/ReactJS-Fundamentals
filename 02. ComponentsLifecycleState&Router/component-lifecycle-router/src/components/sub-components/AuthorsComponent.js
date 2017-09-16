import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Helpers from '../../utilities/Helpers';

class AuthorsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1
    }
  }

  render() {
    let authors = this.props.authors;
    let sortCriteria = this.props.sortCriteria;
    let page = this.props.activePage;

    authors = Helpers.sortArray(authors, sortCriteria);
    authors = Helpers.sliceArray(authors, (page - 1) * 10, page * 10);

    authors = authors.map(author => (
      <tr key={author.id}>
        <td>
          <Link className="book-links" to={`/authors/${author.id}`}>{author.name}</Link>
        </td>
        <td>
          <img src={author.image} alt={`${author.name} ${author.id}`} />
        </td>
      </tr>
    ));

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
        </thead>
        <tbody>
        {authors}
        </tbody>
      </Table>
    );
  }
}

export default AuthorsComponent;