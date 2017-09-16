import React, {Component} from 'react';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

class BookForm extends Component {
  render() {
    return (
      <form>
        <Input
          wrapperClass='input-group'
          id='title'
          text='Title'
          type='text'
          value={this.props.book.title}
          onChange={this.props.onChange}
        />

        <Input
          wrapperClass='input-group'
          id='author'
          text='Author'
          type='text'
          value={this.props.book.author.name}
          onChange={this.props.onChange}
        />

        <TextArea
          wrapperClass='input-group'
          id='description'
          text='Description'
          rows='5'
          value={this.props.book.description}
          onChange={this.props.onChange}
        />

        <Input
          wrapperClass='input-group'
          id='price'
          text='Price'
          type='number'
          min='0'
          value={this.props.book.price}
          onChange={this.props.onChange}
        />

        <Input
          wrapperClass='input-group'
          id='image'
          text='Image'
          type='url'
          value={this.props.book.image}
          onChange={this.props.onChange}
        />

        <div className='input-group'>
          <input type='submit' className='form-control' id='createBook' value='Create' onClick={this.props.onClick}/>
        </div>
      </form>
    );
  }
}

export default BookForm