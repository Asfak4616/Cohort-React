import React, { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
  console.log("App rendering...");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "asfak", id: 786 });
  return (
    <div>
      hello Ahamed
      <h1>count is {count}</h1>
      <h2>Name is {users.name}</h2>
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
      <Home users={users} />
      <About />
    </div>
  );
};
export default App;
