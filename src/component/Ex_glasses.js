import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import { glassArr } from "../data";

export default class Ex_glasses extends Component {
  state = {
    glassArr: glassArr,
    glassSelected: glassArr[0],
  };
  handleChangeGlass = (glass) => {
    this.setState({ glassSelected: glass });
  };
  render() {
    return (
      <div className="body_web">
        <Header />
        <div className="web_container">
          <Body
            handleChangeGlass={this.handleChangeGlass}
            glassSelected={this.state.glassSelected}
            glassList={this.state.glassArr}
          />
        </div>
      </div>
    );
  }
}
