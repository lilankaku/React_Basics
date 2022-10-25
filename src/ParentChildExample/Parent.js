import Child from "./Child";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Parent() {
  const [count, setCount] = useState(0);

  const increamentCounter = () => {
    // const a = count + 1;
    setCount(count + 1);
  };

  const fromChildFunc = (valueFromChild) => {
    console.log(valueFromChild);
    setCount(Number(valueFromChild));
  };

  return (
    <div>
      <Child
        value={count}
        increamentCounter={increamentCounter}
        fromChildFunc={fromChildFunc}
      />
    </div>
  );
}

Parent.proptypes = {
  valueFromChild: PropTypes.number
};
