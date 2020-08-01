import React from 'react';
import '../App.css';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTranslate = this.handleTranslate.bind(this);
    this.textContent = '';
  }

  handleTranslate(ev) {
    const textValue = ev.target.value;
    this.textContent = textValue;
    this.forceUpdate();
  }

  render() {
    const handleTranslate = this.handleTranslate;
    return (
      <div className="App">
        <TextInput actionToPerform={handleTranslate} />
        <MIMIMITranslator textToTranslate={this.textContent} />
      </div>
    );
  }
}

export default App;
