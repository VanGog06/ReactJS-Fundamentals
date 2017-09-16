import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className={this.props.wrapperClass}>
        <label htmlFor={this.props.id}>{this.props.text}: </label>
        <input
          type={this.props.type}
          className='form-control'
          placeholder={this.props.text}
          id={this.props.id}
          name={this.props.id}
          value={this.props.value}
          min={this.props.min ? this.props.min : ''}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;