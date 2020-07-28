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

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleChangeDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }
  handleChangeLanguage(event) {
    this.setState({
      language: event.target.value,
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
            onChange={this.handleChangeName}
          />
          <label htmlFor="description">Descripción</label>
          <input
            id="description"
            type="textarea"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          <label htmlFor="language">
            Idioma
            <select
              id="language"
              value={this.state.language}
              onChange={this.handleChangeLanguage}
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
