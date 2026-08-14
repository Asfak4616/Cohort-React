import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const [user,SetUser] = useState({name:"rohan"})
  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>
      <button onClick={()=>{
     setCount(count+1)
      }}>Inc</button>
      <button onClick={()=>{
      user.name="batman"
      }}>Change Name</button>
    </div>
  )
}

export default App
