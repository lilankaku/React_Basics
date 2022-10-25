import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { incrementCount, count } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Hovered {count} Times</button>
      </div>
    );
  }
}
export default withCounter(HoverCounter);
