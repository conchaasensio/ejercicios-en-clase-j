import React, { Component } from 'react';

class Collapsible1 extends Component {
  constructor(props) {
    super(props);
    this.collapsibleHandlerChild = this.collapsibleHandlerChild.bind(this);
  }
  collapsibleHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
  }
  render() {
    return (
      <div className="collapsible" id="1">
        <h2 id="1" onClick={this.collapsibleHandlerChild}>
          Collapsible title 1
        </h2>
        <div className={this.props.isOpen === '1' ? '' : 'hidden'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          aperiam sint incidunt delectus laborum eos fuga expedita dolorum
          numquam atque dolor, eveniet veritatis corporis nobis quisquam esse?
          Ducimus, nobis at.
        </div>
      </div>
    );
  }
}

export default Collapsible1;
