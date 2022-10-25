import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Child(props) {
  const [points, setPoints] = useState(0);

  return (
    <React.Fragment>
      <div>Displaying {props.value} from Parent Component</div>
      <button onClick={props.increamentCounter}>
        Increase Count {props.value}
      </button>
      <div style={{ padding: 20 }}>
        Send to Parent:
        <input
          vaue={points}
          onChange={(e) => {
            setPoints(e.target.value);
          }}
        ></input>
        <div style={{ paddingTop: 10 }}>
          <button onClick={() => props.fromChildFunc(points)}>Send</button>
        </div>
      </div>
    </React.Fragment>
  );
}

Child.proptypes = {
  value: PropTypes.number
};
