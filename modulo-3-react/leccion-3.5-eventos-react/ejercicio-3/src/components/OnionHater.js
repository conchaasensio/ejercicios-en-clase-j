import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (ev) => {
    const value = ev.target.value.toLowerCase();
    const element = document.querySelector('.App');
    if (value.includes('cebolla')) {
      this.isHating = true;
      element.classList.add('background');
    } else {
      this.isHating = false;
      element.classList.remove('background');
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div className="text">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default OnionHater;
