import React, { Component } from "react";
import Temperature from "./components/Temperature";
import "bootstrap/dist/css/bootstrap.min.css";
export default class app extends Component {
  render() {
    return (
      <div>
        <Temperature />
      </div>
    );
  }
}
