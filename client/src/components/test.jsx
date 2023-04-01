import React, { Component } from "react";
class Test extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div class="dropdown1" style={{ width: "500px" }}>
              <div className="select1">
                <span className="selected">Menu</span>
                <div className="dropdown-toggle"></div>
              </div>

              <ul className="menu1">
                <li className="active1">Laptop</li>
                <li>tablets</li>
                <li>desktop</li>
                <li>parts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
