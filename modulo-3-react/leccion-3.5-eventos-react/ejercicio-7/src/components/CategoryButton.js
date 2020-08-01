import React from 'react';

class CategoryButton extends React.Component {
  render() {
    const actionToPerform = this.props.actionToPerform;
    const itemCategory = this.props.category;
    return <button onClick={actionToPerform}>{itemCategory}</button>;
  }
}

export default CategoryButton;
