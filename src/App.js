import React, { Component } from "react";
import "./App.css";
import Switcher from "./Switcher";
import CardNumberHolder from "./CardNumberHolder";
import ModalButton from "./ModalButton";

class App extends Component {
  render() {
    return (
      <div>
        <Switcher>
          <CardNumberHolder />
          <ModalButton />
        </Switcher>
      </div>
    );
  }
}

export default App;
