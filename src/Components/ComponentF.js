import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      // Consume Context Value
      <UserConsumer>
        {(userName) => {
          return (
            <React.Fragment>Successfully rendered {userName}</React.Fragment>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
