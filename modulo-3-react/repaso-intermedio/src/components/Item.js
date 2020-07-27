import React from 'react';

class Item extends React.Component {
  render() {
    const membersLi = this.props.members.map((member, index) => {
      return <li key={index}>{member}</li>;
    });

    return (
      <article>
        <h2>{this.props.name}</h2>
        <span>{this.props.icon}</span>
        <h3>Members</h3>
        <ul>{membersLi}</ul>
      </article>
    );
  }
}

export default Item;

//Componente funcional
//const Item = props => {
//  const membersLi = props.members.map((member, index) => {
//   return <li key={index}>{member}</li>;
// });
// return (
//   <article>
//     <h2>{props.name}</h2>
//     <span>{props.icon}</span>
//     <h3>Members</h3>
//     <ul>{membersLi}</ul>
//   </article>
// );
//};
