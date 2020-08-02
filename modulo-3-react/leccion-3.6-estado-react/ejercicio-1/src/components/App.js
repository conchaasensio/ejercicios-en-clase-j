import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const inputValue = ev.currentTarget.value;
    this.setState({
      inputText: inputValue,
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleInput} />
        <p className="text">{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
