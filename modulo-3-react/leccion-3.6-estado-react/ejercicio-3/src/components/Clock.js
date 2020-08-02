import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '',
    };

    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const date = new Date();
    const time =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.setState({
      hour: time,
    });
  }

  render() {
    return <p>{this.state.hour}</p>;
  }
}

export default Clock;
