import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return (
      <div className={this.props.wrapperClass}>
        <label htmlFor={this.props.id}>{this.props.text}: </label>
        <textarea
          className='form-control'
          rows={this.props.rows}
          id={this.props.id}
          name={this.props.id}
          value={this.props.value}
          placeholder={this.props.text}
          onChange={this.props.onChange}
        >
        </textarea>
      </div>
    );
  }
}

export default TextArea;