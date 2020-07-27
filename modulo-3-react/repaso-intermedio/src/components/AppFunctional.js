import React, { useState } from 'react';
import List from './List';
import clubsFromApi from '../data/clubs.json';

const App = () => {
  const [clubs, setClubs] = useState(clubsFromApi);
  //En este caso, como no hay eventos, la función setClubs no va a ser utilizada. La podemos dejar (sale aviso) o la podemos quitar.

  return (
    <div>
      <List clubs={clubs} />
    </div>
  );
};

//Componente de clase
// class App extends React.Component {
//   render() {
//     return <div>Hola mundo</div>;
//   }
// }

export default App;
