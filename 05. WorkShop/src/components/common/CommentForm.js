import React, { Component } from 'react';
import TextArea from '../common/TextArea';

class CommentForm extends Component {
  render() {
    return (
      <form>
        <TextArea
          wrapperClass='input-group'
          id='comment'
          text='Comment'
          rows='5'
          onChange={this.props.onChange}
        />

        <div className='input-group'>
          <input type='submit' className='form-control' id='createAuthor' value='Comment' onClick={this.props.onClick} />
        </div>
      </form>
    );
  }
}

export default CommentForm;