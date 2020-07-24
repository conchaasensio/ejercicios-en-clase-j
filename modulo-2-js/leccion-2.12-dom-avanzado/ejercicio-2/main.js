'use strict';

const city = document.querySelector('.js-city');
let madridImage1 = document.querySelector('.js-img-1');
let madridImage2 = document.querySelector('.js-img-2');
let madridImage3 = document.querySelector('.js-img-3');
let parisImage1 = document.querySelector('.js-img-1');
let parisImage2 = document.querySelector('.js-img-2');
let parisImage3 = document.querySelector('.js-img-3');
let nyImage1 = document.querySelector('.js-img-1');
let nyImage2 = document.querySelector('.js-img-2');
let nyImage3 = document.querySelector('.js-img-3');

function handleClick(event) {
  if (event.currentTarget.value === 'madrid') {
    madridImage1.src =
      'https://consultoria.anexia.es/Portals/2/florian-wehde-1092251-unsplash%20%281%29.jpg';
    madridImage2.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToUArp1KQWf02itdYI5UvkHMWMP2wV5t5Rrg&usqp=CAU';
    madridImage3.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPe1p34ce60tcr6iOKfPhFOgj9tD-cOez-oQ&usqp=CAU';
  } else if (event.currentTarget.value === 'paris') {
    parisImage1.src =
      'https://www.guruwalk.com/blog/wp-content/uploads/2019/10/que-ver-paris.jpg';
    parisImage2.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbsiMDujFxCXuHiw8XnS_oUtlJ8YAkuxk5og&usqp=CAU';
    parisImage3.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6iYqZMwMHv4_hXqJWs79c_UW9v_3DkZ4dDQ&usqp=CAU';
  } else if (event.currentTarget.value === 'ny') {
    nyImage1.src =
      'https://www.civitatis.com/blog/archivos/Estatua-de-la-Libertad.jpg';
    nyImage2.src = 'https://www.civitatis.com/blog/archivos/Nueva-York-1.jpg';
    nyImage3.src =
      'https://www.civitatis.com/blog/archivos/Puente-de-Brooklyn.jpg';
  }
}

city.addEventListener('change', handleClick);
