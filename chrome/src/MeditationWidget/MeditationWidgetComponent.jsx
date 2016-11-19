import React, { Component, PropTypes } from 'react';
import  MeditationWidget from './MeditationWidget.jsx';

class MeditationWidgetComponent extends Component {
  static propTypes = {
    startPlaying: PropTypes.func,
  }

  handleClick = () => {
    /* this.synth.triggerAttackRelease('C4', '8n');
     * console.log('handled click');*/
    this.props.startPlaying();
  }

  componentDidMount() {
    this.noiseSynth = new Tone.NoiseSynth();
    this.noiseSynth.set('noise.type', 'pink');
    this.noiseSynth.envelope.sustain = 0.5;
    this.freeverb = new Tone.Freeverb().toMaster();
    this.freeverb.set('roomSize', 0.1);
    this.freeverb.set('dampening', 1000);
    this.eq = new Tone.EQ3(-100, 0, -6).toMaster();
    this.noiseSynth.connect(this.eq);
    this.noiseSynth.connect(this.freeverb);
    this.interval = setInterval(this.playSound, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  playSound = () => {
    this.noiseSynth.triggerAttackRelease(1.2);
  }

  render() {
    return (
      <MeditationWidget
        handleClick={this.handleClick}
      />
    );
  }
}


export default MeditationWidgetComponent;
