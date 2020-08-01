import React from 'react';

class OnionHater extends React.Component {
  onChnageListener = (ev) => {
    if (ev.target.value.includes('cebolla')) {
      alert('Odio la cebolla');
    }
  };

  render() {
    return (
      <div className="text">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          onChange={this.onChnageListener}
        ></textarea>
      </div>
    );
  }
}

export default OnionHater;
