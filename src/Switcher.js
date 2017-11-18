import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    const id = parseInt(event.target.getAttribute('data-id'), 10);
    this.setState({selectedChild: id});
  };

  getChildClass = (id) => {
    return id === this.state.selectedChild ? "component-list__name active" : "component-list__name"
  }

  showChildrenNames = () => {
    const { children } = this.props;

    return children.map((child, id) => (
      <li
        key={child.type.name}
        data-id={id}
        onClick={this.handleChangeChild}
        className={this.getChildClass(id)}
      >
        {child.type.displayName || child.type.name}
      </li>
    ));
  };

  renderChildren = () => {
    const { children } = this.props;
    const { selectedChild } = this.state;

    return children[selectedChild];    
  };

  render() {
    return (
      <nav>
        <ul className="component-list">{this.showChildrenNames()}</ul>
        {this.renderChildren()}
      </nav>
    );
  }
}

export default Switcher;
