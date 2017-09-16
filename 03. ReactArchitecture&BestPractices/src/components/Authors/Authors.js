import React, { Component } from 'react';
import Author from './Author';

class Authors extends Component {
  render() {
    let authors = this.props.authors.map((author, index) => {
      return (
        <Author key={index}
                author={author}
                index={index}
                />);
    });

    return (
      <div className="list-group">
        {authors}
      </div>
    );
  }
}

export default Authors;