import React, { use, useCallback, useMemo, useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
  console.log("App rendering...");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "asfak", id: 786 });


  let calculation = useMemo(()=>{
    let sum = 0;
    for(let i=0;i<100;i++){
      sum+=i;
    }
    return sum
  },[])

  let greet = useCallback(()=>{
console.log("Good Evening...")
  },[users])


  return (
    <div>
      hello Ahamed
      <h1>count is {count}</h1>
      <h2>Name is {users.name}</h2>
      <h1>My Calculation is - {calculation}</h1>
      <button
        onClick={() => {
          setUsers({ ...users, name: "Ahamed" });
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <Home greet={greet}/>
      <About greet={greet} />

    </div>
  );
};
export default App;
