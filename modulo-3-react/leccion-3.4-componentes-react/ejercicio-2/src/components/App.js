import React from 'react';
import '../../src/App.css';
import HalfPage from './HalfPage';

function App() {
  return (
    <div className="App">
      <HalfPage>
        <h1>Mitad 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae
          omnis a nesciunt quos, accusantium est! Eaque voluptatibus architecto
          rem hic, quidem quasi neque. Excepturi adipisci earum dicta cupiditate
          maxime!
        </p>
      </HalfPage>
      <HalfPage>
        <h1>Mitad 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          ratione laudantium modi molestias quisquam tenetur officiis omnis,
          sint, autem adipisci ea et iure ad beatae, mollitia porro! Repellat,
          totam neque?
        </p>
      </HalfPage>
    </div>
  );
}

export default App;
