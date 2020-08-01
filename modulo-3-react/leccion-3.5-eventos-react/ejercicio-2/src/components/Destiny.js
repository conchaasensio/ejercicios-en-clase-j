import React from 'react';

class Destiny extends React.Component {
  onChnageListener = (ev) => {
    alert(`Tu destino es viajar a ${ev.target.value}`);
  };
  render() {
    return (
      <div className="form-container">
        <h1>Elige un destino</h1>
        <form action="">
          <select name="city" id="city" onChange={this.onChnageListener}>
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

export default Destiny;
