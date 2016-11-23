import React, { Component, PropTypes } from 'react';

import Greeting from './Greeting.jsx';

class GreetingComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      message: "Hello, NAME",
    };
  }

  componentDidMount() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) {
      this.setState({ message: 'Good Morning, NAME' });
    } else if (hours >= 12 && hours < 17) {
      this.setState({ message: 'Good Afternoon, NAME' });
    } else {
      this.setState({ message: 'Good Evening, NAME' });
    }
  }

  render() {
    const { message } = this.state;
    const { name } = this.props;

    return (
      <Greeting message={message.replace('NAME', name)}/>
    );
  }
}

export default GreetingComponent;
