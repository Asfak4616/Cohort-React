import React, { useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Comp4 from './Comp4'
import NestedComp from './NestedComp'

const TestComponents = () => {
  return (
    <div>
        <h1>Component</h1>
      <Comp1 >
        <NestedComp/>
      </Comp1>
      
    </div>
  )
}

export default TestComponents
