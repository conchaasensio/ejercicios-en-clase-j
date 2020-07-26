import React from 'react';
import '../App.scss';
import MediaCard from './MediaCard';

let pictureCard = './IMG_0026.jpg';

function App() {
  return (
    <div className="App">
      <MediaCard
        name="Bilbo Asensio"
        date="27 de julio de 2020"
        img={pictureCard}
        text="Hola, soy Bilbo y soy adorable."
        likes="2020"
        heart="💚"
      />
    </div>
  );
}

export default App;
