import React from 'react';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: numbers,
      filterNumber: '',
      isChecked: false,
    };
    this.handleFilterNumbersList = this.handleFilterNumbersList.bind(this);
    this.isClicked = this.isClicked.bind(this);
    this.inputNumber = React.createRef();
    this.checkEvenNumbers = React.createRef();
  }

  //Funciones manejadoras
  handleFilterNumbersList = (ev) => {
    //const filteredNumbers = this.filterNumbersList();
    this.setState({ filterNumber: ev.currentTarget.value });
  };

  filterNumbersList() {
    const inputValue = this.inputNumber.current.value;
    const fieldNumber = parseInt(inputValue) || 0;
    const greaterThanNumbers = this.state.numbers.filter(
      (n) => n > fieldNumber
    );

    const evenNumbers = greaterThanNumbers.filter(
      (fieldNumber) => fieldNumber % 2 === 0
    );
    const currentTarget = this.checkEvenNumbers.current;
    const checkedBox = currentTarget.checked;

    return checkedBox ? evenNumbers : greaterThanNumbers;
  }

  isClicked = (ev) => {
    //let theNumbers = this.filterNumbersList();

    this.setState({ isChecked: ev.currentTarget.checked });
  };

  render() {
    const numbersLi = this.state.numbers
      .filter((number) => {
        const filterNumber = parseInt(this.state.filterNumber);
        // if (isNaN(filterNumber)) {
        //   return true;
        // } else {
        //   return number > parseInt(this.state.filterNumber);
        // }
        return isNaN(filterNumber)
          ? true
          : number > parseInt(this.state.filterNumber);
      })
      .filter((number) => {
        // if (this.state.isChecked === true) {
        //   return number % 2 === 0;
        // } else {
        //   return true;
        // }
        return this.state.isChecked === true ? number % 2 === 0 : true;
      })
      .map((n) => <li key={n}>{n}</li>);

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
            Filtrar por pares:
            <input
              type="checkbox"
              onClick={this.isClicked}
              ref={this.checkEvenNumbers}
            />
          </label>
        </form>
        <ul>{numbersLi}</ul>
      </div>
    );
  }
}

export default App;
