import React, { Component } from "react";
import "../css/Glasses.css";

export default class Glasses extends Component {
  render() {
    return (
      //   <div className="row">
      <div className="col-2">
        <div className="list row">
          <div className="glass_list">
            <img
              onClick={() => {
                this.props.handleChangeGlass(this.props.glassData);
              }}
              width={200}
              height={100}
              src={this.props.glassData.url}
              alt=""
            />
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}
