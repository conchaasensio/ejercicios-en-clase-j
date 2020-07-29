import React from 'react';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: numbers,
    };
    this.handleFilterNumbersList = this.handleFilterNumbersList.bind(this);
    this.isClicked = this.isClicked.bind(this);
    this.inputNumber = React.createRef();
    this.checkEvenNumbers = React.createRef();
  }

  //Funciones manejadoras
  handleFilterNumbersList = () => {
    const filteredNumbers = this.filterNumbersList();
    this.setState({ numbers: filteredNumbers });
  };

  filterNumbersList() {
    const inputValue = this.inputNumber.current.value;
    const fieldNumber = parseInt(inputValue) || 0;
    const greaterThanNumbers = numbers.filter((n) => n > fieldNumber);

    const evenNumbers = greaterThanNumbers.filter(
      (fieldNumber) => fieldNumber % 2 === 0
    );
    const currentTarget = this.checkEvenNumbers.current;
    const checkedBox = currentTarget.checked;

    return checkedBox ? evenNumbers : greaterThanNumbers;
  }

  isClicked = () => {
    let theNumbers = this.filterNumbersList();

    this.setState({ numbers: theNumbers });
  };

  render() {
    return (
      <div className="App">
        <form action="">
          <label htmlFor="">
            Escribe un número
            <input
              type="text"
              onChange={this.handleFilterNumbersList}
              ref={this.inputNumber}
            />
            <input
              type="checkbox"
              onClick={this.isClicked}
              ref={this.checkEvenNumbers}
            />
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
