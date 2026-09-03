import React from "react";

const About = () => {
  console.log("About Rendering..");
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
};
export default React.memo(About);
