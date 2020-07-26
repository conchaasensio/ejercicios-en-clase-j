import React from 'react';
import MediaCard from './MediaCard';

const picture1 =
  'https://vignette.wikia.nocookie.net/eldragonverde/images/4/47/Gandalf.png/revision/latest?cb=20121217202035&path-prefix=es';
const picture2 =
  'https://vignette.wikia.nocookie.net/eldragonverde/images/c/c5/Legolas2.png/revision/latest/top-crop/width/360/height/450?cb=20121021190948&path-prefix=es';
const picture3 =
  'https://vignette.wikia.nocookie.net/eldragonverde/images/3/38/Gimli.png/revision/latest/top-crop/width/360/height/450?cb=20130203185229&path-prefix=es';

class MediaList extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <MediaCard
            name="Gandalf el Gris"
            date="27 de julio de 2020"
            img={picture1}
            text="Un mago nunca llega tarde, ni pronto, llega exactamente cuando se lo propone"
            likes="2020"
            heart="💚"
          />
        </li>
        <li>
          <MediaCard
            name="Légolas"
            date="22 de enero de 2020"
            img={picture2}
            text="¡Y con mi arco!"
            likes="1976"
            heart="💚"
          />
        </li>
        <li>
          <MediaCard
            name="Gimli"
            date="16 de marzo de 2020"
            img={picture3}
            text="Certeza de muerte... mínima esperanza de éxito... ¿a qué esperamos?"
            likes="3027"
            heart="💚"
          />
        </li>
      </ul>
    );
  }
}

export default MediaList;
