import React from "react";
import { UserProvider } from "./userContext";
import ComponentC from "./ComponentC";

export const ReactContextExample = () => {
  return (
    <React.Fragment>
      <div>React Context Example</div>
      {/* Provide Context value here */}
      <UserProvider value="React Context Example ">
        <ComponentC />
      </UserProvider>
      <br />
      With Value = "React Context Example"
    </React.Fragment>
  );
};
