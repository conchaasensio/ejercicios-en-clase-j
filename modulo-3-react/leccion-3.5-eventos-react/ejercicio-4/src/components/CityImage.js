import React from 'react';

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      'Buenos Aires':
        'https://pix10.agoda.net/hotelImages/4877634/0/db7ebdd6192005597fb67a0632c3a153.jpg?s=1024x768',
      Sidney:
        'https://www.todaaustralia.com/wp-content/uploads/2018/07/sidney-sydney-australia-1170x658.jpg',
      Boston:
        'https://www.viajes-carrefour.com/blog/wp-content/uploads/2018/12/boston-massachusetts.jpg',
      Praga:
        'https://www.hola.com/imagenes/viajes/20200428166812/praga-ciudad-historica-maravillas-desde-mi-pantalla/0-817-199/praga-ciudad-historica-m.jpg',
      Tokio:
        'https://www.japonalternativo.com/wp-content/uploads/2018/10/barrio-de-akihabara-en-tokio.jpg',
    };
  }

  render() {
    return <img src={this.cities[this.props.city]} alt={this.props.city} />;
  }
}

export default CityImage;
