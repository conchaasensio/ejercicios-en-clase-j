import React from 'react';
import Item from './Item';
import CategoryButton from './CategoryButton';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
];

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.handleSelectedCategory.bind(this);
    this.selectedCategory = 'Todos';
  }

  handleSelectedCategory(ev) {
    this.selectedCategory = ev.currentTarget.innerHTML;
    this.forceUpdate();
  }

  render() {
    const renderJSX = arrayOfItems
      .filter((item) => {
        return (
          this.selectedCategory === 'Todos' ||
          item.category === this.selectedCategory
        );
      })
      .map((item) => {
        return (
          <li key={item.name}>
            <Item
              name={item.name}
              description={item.description}
              quantity={item.quantity}
              category={item.category}
              price={item.price}
            />
          </li>
        );
      });
    return (
      <>
        <div className="item-list">
          <ul className="item-list">{renderJSX}</ul>
        </div>
        <CategoryButton
          category="Bebida"
          actionToPerform={this.handleSelectedCategory}
        />
        <CategoryButton
          category="Cereales"
          actionToPerform={this.handleSelectedCategory}
        />
        <CategoryButton
          category="Fast-food"
          actionToPerform={this.handleSelectedCategory}
        />
        <CategoryButton
          category="Todos"
          actionToPerform={this.handleSelectedCategory}
        />
      </>
    );
  }
}

export default ItemList;
