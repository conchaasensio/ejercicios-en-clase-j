'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

//Resuelto con operadores ternarios
const winner = runners.reduce((fasterRunner, runner) =>
  fasterRunner.time < runner.time ? fasterRunner : runner
);
console.log(winner);

// Resuelto con un if normal.
// const winner = runners.reduce((fasterRunner, runner) => {
//   if (fasterRunner.time < runner.time) {
//     return fasterRunner;
//   } else {
//     return runner;
//   }
// });
