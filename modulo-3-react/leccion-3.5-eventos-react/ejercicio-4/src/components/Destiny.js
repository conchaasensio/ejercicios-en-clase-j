import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.myCity = '';
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (ev) => {
    this.myCity = ev.target.value;
    alert(`Tu destino es ir a ${this.myCity}`);
    this.forceUpdate();
  };
  render() {
    return (
      <div className="form-container">
        <h1>Elige un destino</h1>
        <form action="">
          <select name="city" id="city" onChange={this.handleChange}>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Boston">Boston</option>
            <option value="Praga">Praga</option>
            <option value="Tokio">Tokio</option>
          </select>
          <CityImage city={this.myCity} />
        </form>
      </div>
    );
  }
}

export default Destiny;
