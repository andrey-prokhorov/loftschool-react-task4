import React, { Component } from "react";
import "./Switcher.css";
import classNames from "classnames";

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = id => event => {
    this.setState({ selectedChild: id });
  };

  getChildClass = id => {
    const isActive = id === this.state.selectedChild;
    return classNames("component-list__name", isActive ? "active" : "");
  };

  showChildrenNames = () => {
    const { children } = this.props;

    return children.map((child, id) => (
      <li
        key={child.type.name}
        onClick={this.handleChangeChild(id)}
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
