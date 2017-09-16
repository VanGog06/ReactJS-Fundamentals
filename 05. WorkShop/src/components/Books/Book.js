import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="media book">
          <span className="position pull-left">{Number(this.props.index) + 1}</span>
          <div className="media-body">
            <h4 className="media-heading">
              <Link to={ `/books/${this.props.book.id}` }> {this.props.book.title} </Link>
            </h4>
            <img src={this.props.book.image} alt="React Course" height="100" width="100" />
            <br />
            <p>
              <small>
                Author:
                <Link to={`/authors/${this.props.book.author.id}`}>
                  {this.props.book.author.name}
                </Link>
              </small>
            </p>
            <p>Description:
              {this.props.book.description}
            </p>
            <p>Price: {this.props.book.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;