import React from 'react';
import logo from './images/IMG_0026.jpg';
import './Media.css';

function MediaCard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">Bilbo</h3>
        <p>Lunes 26 de junio de 2017</p>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis vehicula tortor, sollicitudin maximus libero ultrices sit amet.
          Suspendisse vitae quam neque. Cras sed hendrerit neque. Fusce augue
          arcu, tincidunt interdum auctor vitae, placerat sit amet massa. Cras
          eget tellus nec est maximus porta. Vivamus non ullamcorper massa.
          Integer pharetra convallis felis. Donec at justo non nunc finibus
          lobortis ut eu dolor.
        </p>
        <p>Leer más...</p>
        <p>
          37 <i class="fas fa-heart"></i>
        </p>
      </main>
    </div>
  );
}

export default MediaCard;
