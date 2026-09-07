import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../features/CounterSlice";

const LoginPage = () => {
  let [inpValue, setInpValue] = useState(0);
  let disPatch = useDispatch();
  let { count } = useSelector((Store) => Store.counter);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => disPatch(increment())}>Increment</button>
      <button onClick={() => disPatch(decrement())}>Decrement</button>
      <input
        type="text"
        placeholder="Enter Count "
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button onClick={() => disPatch(incrementByValue(inpValue))}>
        Add To Count
      </button>
    </div>
  );
};

export default LoginPage;
