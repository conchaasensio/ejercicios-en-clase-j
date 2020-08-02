import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState((prevState) => {
      return prevState.counter++;
    });

    const sheepImage = document.createElement('img');
    sheepImage.setAttribute(
      'src',
      'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png'
    );
    const imageContainer = document.querySelector('.image-container');
    imageContainer.appendChild(sheepImage);
  }

  render() {
    return (
      <div className="image-container">
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>Contar ovejas</button>
      </div>
    );
  }
}

export default SheepCounter;
