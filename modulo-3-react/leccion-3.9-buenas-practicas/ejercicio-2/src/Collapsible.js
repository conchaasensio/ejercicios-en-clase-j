import React from 'react';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsibleOpen: false,
    };
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }

  handleCollapsible = (ev) => {
    this.setState({ isCollapsibleOpen: !this.state.isCollapsibleOpen });
  };

  render() {
    return (
      <li className="collapsible-container" onClick={this.handleCollapsible}>
        <div className="collapsible">
          <h2>{this.props.name}</h2>
        </div>
        {this.state.isCollapsibleOpen ? (
          <div className="content">
            <p>{this.props.source}</p>
          </div>
        ) : null}
      </li>
    );
  }
}

export default Collapsible;
