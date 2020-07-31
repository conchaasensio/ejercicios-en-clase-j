import React from 'react';
import './App.css';
import Collapsible1 from './Collapsible1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.collapsibleHandler = this.collapsibleHandler.bind(this);
    this.state = { isOpen: '' };
  }
  collapsibleHandler(ev) {
    console.log(ev.currentTarget.id);
    this.setState({ isOpen: ev.currentTarget.id });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Collapsible1
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
        />
        <div className="collapsible" id="2">
          <h2 id="2" onClick={this.collapsibleHandler}>
            Collapsible title 2
          </h2>
          <div className={this.state.isOpen === '2' ? '' : 'hidden'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            aperiam sint incidunt delectus laborum eos fuga expedita dolorum
            numquam atque dolor, eveniet veritatis corporis nobis quisquam esse?
            Ducimus, nobis at.
          </div>
        </div>
      </div>
    );
  }
}
export default App;
