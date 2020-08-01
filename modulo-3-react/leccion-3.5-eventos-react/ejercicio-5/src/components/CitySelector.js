import React from 'react';

class CitySelector extends React.Component {
  render() {
    const actionToPerform = this.props.actionToPerform;
    const selectedCity = this.props.selectedCity;

    return (
      <div className="form-container">
        <h1>Elige un destino</h1>
        <form action="">
          <select
            name="city"
            id="city"
            onChange={actionToPerform}
            value={selectedCity}
          >
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Boston">Boston</option>
            <option value="Praga">Praga</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
      </div>
    );
  }
}

export default CitySelector;
