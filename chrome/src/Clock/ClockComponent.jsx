import React, { Component } from 'react';
import Clock from './Clock.jsx';

let convertMilitaryHour = (hour) => {
  if (hour === '0') { return '12'; }
  else return (+hour > 12) ? `${+hour - 12}` : hour;
};

let padMinutes = (minutes) => {
  if (+minutes > 9) { return minutes; }
  return `0${minutes}`;
};

class ClockComponent extends Component {
  constructor(props) {
    super(props);

    let date = new Date();
    this.hour = `${date.getHours()}`;
    this.minute = padMinutes(date.getMinutes() + '');

    this.state = {
      date: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.clock = setInterval(this.tick, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.date.minute !== nextState.date.minute;
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick() {
    let date = new Date();
    this.hour = date.getHours() + '';
    this.minute = padMinutes(date.getMinutes() + '');
    this.setState({ date });
  }

  render() {
    return (
      <Clock hour={convertMilitaryHour(this.hour)} minute={this.minute} />
    );
  }
}

export default ClockComponent;
