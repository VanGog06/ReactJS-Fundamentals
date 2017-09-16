import React, { Component } from 'react';
import Input from '../common/Input';

class AuthorForm extends Component {
  render() {
    let books = [];

    return (
      <form>
        <Input
          wrapperClass='input-group'
          id='name'
          text='Name'
          type='text'
          name='name'
          value={this.props.author.name}
          onChange={this.props.onChange}
        />

        <Input
          wrapperClass='input-group'
          id='image'
          text='Image'
          type='url'
          name='image'
          value={this.props.author.image}
          onChange={this.props.onChange}
        />

        <Input
          wrapperClass='input-group'
          id='books'
          text='Books'
          type='text'
          name='books'
          value={this.props.author.books}
          onChange={this.props.onChange}
        />

        <div className='input-group'>
          <input type='submit' className='form-control' id='createAuthor' value='Create' onClick={this.props.onClick} />
        </div>
      </form>
    );
  }
}

export default AuthorForm;