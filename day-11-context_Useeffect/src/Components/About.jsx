import React, { useContext, useEffect } from "react";
import { MyStore } from "../Context/My_Context";

const About = () => {
  let interval = setInterval(() => {
    console.log("I am Asfak Ahamed");
  }, 1000);

  useEffect(() => {
    console.log("About Render");

    return () => {
      clearInterval(interval);
      console.log("I am trigger because about is gone");
    };
  }, []);
  return (
    <div>
      <h1>About Rendering</h1>
    </div>
  );
};

export default About;
