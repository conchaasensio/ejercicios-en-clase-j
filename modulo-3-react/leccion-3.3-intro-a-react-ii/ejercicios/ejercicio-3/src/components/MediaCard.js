import React from 'react';

const MediaCard = (props) => {
  return (
    <div className="App">
      <div className="profile-container">
        <div className="img-profile">
          <img className="profile" src={props.img} alt="img-profile" />
        </div>
        <div className="container-name">
          <h1 className="name">{props.name}</h1>
          <p>{props.date}</p>
        </div>
      </div>
      <div className="info-container">
        <p>{props.text}</p>

        <div className="more">
          <p>Leer más...</p>
          <p>
            {props.likes} <i className="fas fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
