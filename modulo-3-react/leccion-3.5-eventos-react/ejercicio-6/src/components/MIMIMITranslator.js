import React from 'react';

class MIMIMITranslator extends React.Component {
  render() {
    const mimimi = this.props.textToTranslate.replace(/[aeiou]/gi, 'i');
    return <p>{mimimi}</p>;
  }
}

export default MIMIMITranslator;
