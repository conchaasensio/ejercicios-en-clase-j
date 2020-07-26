import React from 'react';

class MediaCard extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="profile-container">
          <div className="img-profile">
            <img className="profile" src={this.props.img} alt="img-profile" />
          </div>
          <div className="container-name">
            <h1 className="name">{this.props.name}</h1>
            <p>{this.props.date}</p>
          </div>
        </div>
        <div className="info-container">
          <p>{this.props.text}</p>

          <div className="more">
            <p>Leer más...</p>
            <p>
              {this.props.likes} <i className="fas fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaCard;
