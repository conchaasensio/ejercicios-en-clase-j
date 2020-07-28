import React from 'react';

const Preview = (props) => {
  return (
    <div className="card__preview">
      <h1>{props.name || 'Título de la película'}</h1>
      <p>{props.description || 'Descripción de la película'}</p>
      <p>{props.language || 'Idioma'}</p>
    </div>
  );
};

export default Preview;
