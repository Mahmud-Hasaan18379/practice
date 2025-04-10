import React, { useState } from 'react'
import {contexts} from './UseContext'
import Display from './Display'
const Parent = () => {

    const [data , setData] = useState([{name:'Numan' , age:8}])


  return (
    <contexts.Provider value={{data , setData}}>
      <Display/>
    </contexts.Provider>
  )
}

export default Parent
