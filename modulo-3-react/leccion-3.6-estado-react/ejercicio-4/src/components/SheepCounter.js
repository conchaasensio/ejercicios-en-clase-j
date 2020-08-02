import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState((prevState) => {
      return prevState.counter++;
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Contar ovejas</button>
      </div>
    );
  }
}

export default SheepCounter;
