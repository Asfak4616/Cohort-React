import React from 'react'
import { decrement, increment } from './Features/CounterSlice';
import {useDispatch,useSelector} from "react-redux"

const App = () => {
  let dispatch = useDispatch()
 let {count} = useSelector((Store)=>Store.counter);
  return (
    <div>
   <h1>count is {count}</h1>
   <button onClick={()=>dispatch(decrement())}>Decrement</button>
   <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default App
