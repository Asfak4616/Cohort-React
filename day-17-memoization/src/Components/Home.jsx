import React from 'react'

const Home =  ({users}) => {
    console.log("Home Rendering..")
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  )
};

export default React.memo(Home)
