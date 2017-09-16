import React, { Component } from 'react';

class Comments extends Component {
  render() {
    let comment = this.props.comments;

    return (
      <div className="container">
        <h4><em>{Object.keys(comment)}</em>: {Object.values(comment)}</h4>
      </div>
    );
  }
}

export default Comments;