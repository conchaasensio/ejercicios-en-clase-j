import React from 'react';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: numbers,
    };
    this.filterNumbersList = this.filterNumbersList.bind(this);
    this.isClicked = this.isClicked.bind(this);
  }

  //Funciones manejadoras
  filterNumbersList = (ev) => {
    const currentTarget = ev.currentTarget;
    const fieldNumber = parseInt(currentTarget.value);
    const filteredNumbers = numbers.filter((n) => n > fieldNumber);
    if (fieldNumber) {
      this.setState({ numbers: filteredNumbers });
    } else {
      this.setState({ numbers: numbers });
    }
  };

  isClicked = () => {
    const evenNumbers = numbers.filter((fieldNumber) => fieldNumber % 2 === 0);
    this.setState({ numbers: evenNumbers });

    return evenNumbers;
  };

  render() {
    return (
      <div className="App">
        <form action="">
          <label htmlFor="">
            Escribe un número
            <input type="text" onChange={this.filterNumbersList} />
            <input type="checkbox" onClick={this.isClicked} />
          </label>
        </form>
        <ul>
          {this.state.numbers.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
