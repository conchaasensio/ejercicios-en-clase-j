import React from 'react';
import './App.scss';

function App() {
  const profileContainer = (
    <div className="profile-container">
      <div className="img-profile">
        <img
          className="profile"
          src="./images/IMG_0026.jpg"
          alt="img-profile"
        />
      </div>
      <div className="container-name">
        <h1 className="name">Bilbo Asensio</h1>
        <p>Viernes 17 de Julio de 2020</p>
      </div>
    </div>
  );

  const infoContainer = (
    <div className="info-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis
        vehicula tortor, sollicitudin maximus libero ultrices sit amet.
        Suspendisse vitae quam neque. Cras sed hendrerit neque. Fusce augue
        arcu, tincidunt interdum auctor vitae, placerat sit amet massa. Cras
        eget tellus nec est maximus porta. Vivamus non ullamcorper massa.
        Integer pharetra convallis felis. Donec at justo non nunc finibus
        lobortis ut eu dolor.
      </p>

      <div className="more">
        <p>Leer más...</p>
        <p>
          37 <i className="fas fa-heart"></i>
        </p>
      </div>
    </div>
  );

  const appRoot = (
    <div className="App">
      {profileContainer}
      {infoContainer}
    </div>
  );
  return appRoot;
}

export default App;
