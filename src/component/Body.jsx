import React, { Component } from "react";
import "../css/Body.css";
import Glasses from "./Glasses";

export default class Body extends Component {
  render() {
    return (
      <div>
        <img
          className="glass_test"
          width={200}
          height={100}
          src={this.props.glassSelected.url}
          alt=""
        />
        <div className="model"></div>
        <div className="row">
          {this.props.glassList.map((item, index) => {
            return (
              <Glasses
                handleChangeGlass={this.props.handleChangeGlass}
                key={index}
                glassData={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
