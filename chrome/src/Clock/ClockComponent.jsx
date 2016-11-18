import React, { Component } from 'react';
import Clock from './Clock.jsx';

const convertMilitaryHour = (hour) => {
  if (hour === '0') { return '12'; }
  else return (+hour > 12) ? `${+hour - 12}` : hour;
};

const padMinutes = (minutes) => {
  if (+minutes > 9) { return minutes; }
  return `0${minutes}`;
};

class ClockComponent extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    this.hour = convertMilitaryHour(date.getHours() + '');
    this.minute = padMinutes(date.getMinutes() + '');

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.clock = setInterval(this.tick, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.date.getMinutes() !== nextState.date.getMinutes();
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick = () => {
    const date = new Date();
    this.hour = date.getHours() + '';
    this.minute = date.getMinutes() + '';
    this.setState({ date });
  }

  render() {
    return (
      <Clock hour={convertMilitaryHour(this.hour)} minute={padMinutes(this.minute)} />
    );
  }
}

export default ClockComponent;
