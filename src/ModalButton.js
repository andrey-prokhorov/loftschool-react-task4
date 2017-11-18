import React, { Component } from "react";
import Modal from "./Modal";
import "./ModalButton.css";

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  static displayName = "Modal Button";

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  render() {
    const modal = (
      <div className="modal-background">
        <div className="modal-body">
          <h1>Modal window</h1>
          <button onClick={this.hideModal} className="modal-button">
            Close
          </button>
        </div>
      </div>
    );

    return (
      <div className="component-wrapper">
        <button onClick={this.showModal} className="modal-button">
          Show Modal
        </button>

        {this.state.isModalShow ? <Modal>{modal}</Modal> : null}

        <div id="portal">
          <div id="modal" />
        </div>
      </div>
    );
  }
}

export default ModalButton;
