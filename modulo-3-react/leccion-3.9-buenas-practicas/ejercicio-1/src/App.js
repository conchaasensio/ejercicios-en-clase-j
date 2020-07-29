import React from 'react';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbersList: numbers.map((n) => <li key={n}>{n}</li>),
    };
    this.filterNumbersList = this.filterNumbersList.bind(this);
  }

  filterNumbersList = (ev) => {
    const currentTarget = ev.currentTarget;
    const fieldNumber = parseInt(currentTarget.value);
    const filteredNumbers = numbers
      .filter((n) => n > fieldNumber)
      .map((n) => {
        return <li key={n}>{n}</li>;
      });

    this.setState({ numbersList: filteredNumbers });
  };

  render() {
    return (
      <div className="App">
        <form action="">
          <label htmlFor="">
            Escribe un número
            <input type="text" onChange={this.filterNumbersList} />
          </label>
        </form>
        <ul>
          <li>{this.state.numbersList}</li>
        </ul>
      </div>
    );
  }
}

export default App;
