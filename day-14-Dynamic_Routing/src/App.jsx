import React from "react";
import Navbar from "./Components/Navbar";
import App_Routes from "./Routes/App_Routes";

const App = () => {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <App_Routes />
    </div>
  );
};

export default App;
