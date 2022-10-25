// React Higher Order Component(HOC) Example
// HOC takes in a component and returns an enhanced component

import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count} // Pass the props to the
          incrementCount={this.incrementCount} // function
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter; // Export the function
