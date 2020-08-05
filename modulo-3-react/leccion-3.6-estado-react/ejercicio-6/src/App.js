import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthDate: {
        day: 10,
        month: 'diciembre',
        year: 1815,
      },
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    const newFirstName = document.getElementById('firstName').value;
    const newLastName = document.getElementById('lastName').value;
    const birthYear = document.getElementById('birthYear').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthDay = document.getElementById('birthDay').value;

    this.setState(() => {
      return {
        firstName: newFirstName,
        lastName: newLastName,
        birthDate: {
          day: birthDay,
          month: birthMonth,
          year: birthYear,
        },
      };
    });
  }

  render() {
    return (
      <div className="App">
        <form action="">
          <label htmlFor="firstName">
            Nombre
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.updateData}
            />
          </label>
          <label htmlFor="lasttName">
            Apellidos
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.updateData}
            />
          </label>
          <label htmlFor="birthYear">
            Año de nacimiento
            <input
              type="text"
              name="birthYear"
              id="birthYear"
              onChange={this.updateData}
            />
          </label>
          <label htmlFor="birthMonth">
            Mes de nacimiento
            <input
              type="text"
              name="birthMonth"
              id="birthMonth"
              onChange={this.updateData}
            />
          </label>
          <label htmlFor="birthDay">
            Día de nacimiento
            <input
              type="text"
              name="birthDay"
              id="birthDay"
              onChange={this.updateData}
            />
          </label>
        </form>
        <p>
          Me llamo {this.state.firstName} {this.state.lastName} y nací el{' '}
          {this.state.birthDate.day} de {this.state.birthDate.month} de{' '}
          {this.state.birthDate.year}
        </p>
      </div>
    );
  }
}

export default App;
