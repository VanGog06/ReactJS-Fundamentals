import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = UserStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    UserStore.listen(this.onChange);
    UserActions.loginUser();
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}