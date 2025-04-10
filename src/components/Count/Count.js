import React, { useEffect, useState } from 'react'

const Count = () => {

    const [count , setCount ] =useState(0)

    useEffect(()=>{
        console.log('effect')
    },[count])


  return (
    <div>
      <h1>count : { count}</h1>
      <button style={{color:"red"}} onClick={()=>setCount((count)=>count +1)}>+</button>
      <button style={{color:"red"}} onClick={()=>setCount((count)=>count - 1)}>-</button>
    </div>
  )
}

export default Count
