import React from 'react';
import palettes from './data/palettes.json';
import Collapsible from './Collapsible';

class CollapsibleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: palettes,
    };
  }

  render() {
    const collapsibleItems = this.state.palettes.map((item) => {
      return (
        <Collapsible key={item.name} name={item.name} source={item.from} />
      );
    });

    return <ul>{collapsibleItems}</ul>;
  }
}

export default CollapsibleList;
