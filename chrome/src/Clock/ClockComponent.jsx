import React, { Component } from 'react';
import Clock from './Clock.jsx';

const convertMilitaryHour = (hour) => (hour > 12) ? hour - 12 : hour;

class ClockComponent extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    this.hour = date.getHours() + '';
    this.minute = date.getMinutes() + '';

    this.state = {
      date: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.clock = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  componentShouldUpate(nextProps, nextState) {
    return this.state.minute !== nextState.minute;
  }

  tick() {
    const date = new Date();
    this.hour = `${date.getHours()}`;
    this.minute = `${date.getMinutes()}`;
    this.setState({ date });
  }


  render() {
    return (
      <Clock hour={`${convertMilitaryHour(this.hour)}`} minute={this.minute} />
    );
  }
}

export default ClockComponent;
