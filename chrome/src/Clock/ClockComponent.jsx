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
    const hour = date.getHours() + '';
    const minute = date.getMinutes() + '';

    this.state = {
      hour,
      minute,
    };
  }

  componentDidMount() {
    this.clock = setInterval(this.tick, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.minute !== nextState.minute;
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  tick = () => {
    const date = new Date();
    const hour = date.getHours() + '';
    const minute = date.getMinutes() + '';
    this.setState({ hour, minute });
  }

  render() {
    return (
      <Clock hour={convertMilitaryHour(this.state.hour)} minute={padMinutes(this.state.minute)} />
    );
  }
}

export default ClockComponent;
