import React from 'react';
import Preview from './Preview';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: 'Español',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const fieldName = event.target.id;
    this.setState({
      [fieldName]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Descripción</label>
          <input
            id="description"
            type="textarea"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="language">
            Idioma
            <select
              id="language"
              value={this.state.language}
              onChange={this.handleChange}
            >
              <option value="Español" defaultChecked>
                Español
              </option>
              <option value="Inglés">Inglés</option>
              <option value="Alemán">Alemán</option>
            </select>
          </label>
        </form>
        <Preview
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
        />
      </>
    );
  }
}

export default Form;
