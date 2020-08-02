import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'blue',
    };

    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor() {
    this.setState((prevState) => {
      let nextStyling;
      if (prevState.styling === 'blue') {
        nextStyling = 'red';
      } else {
        nextStyling = 'blue';
      }

      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className={`box box-${this.state.styling}`}
          onClick={this.handleChangeColor}
        ></div>
      </div>
    );
  }
}

export default App;
