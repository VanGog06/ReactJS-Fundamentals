import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ajaxAnimationClass: ''
    };
  }

  componentDidMount() {
    $(document).ajaxStart(() => {
      this.setState({
        ajaxAnimationClass: 'fadeIn'
      });
    });

    $(document).ajaxComplete(() => {
      this.setState({
        ajaxAnimationClass: 'fadeOut'
      });
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapse" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to='/' className="navbar-brand">Home</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to='/books/create'>Create Book</Link>
            </li>
            <li>
              <Link to='/books/all'>All Books</Link>
            </li>
            <li>
              <Link to='/authors/create'>Create Author</Link>
            </li>
            <li>
              <Link to='/authors/all'>All Authors</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}