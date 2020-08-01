import React from 'react';

class TextInput extends React.Component {
  render() {
    const handleTranslateChild = this.props.actionToPerform;
    return (
      <form action="">
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          onChange={handleTranslateChild}
        ></textarea>
      </form>
    );
  }
}

export default TextInput;
