import React, { useContext } from 'react'
import { contexts } from './UseContext'

const Display = () => {
  const data = useContext(contexts)
console.log(data)
  return (
    <div>
    {data.map((dt)=>{
      return <div>
        <h1>{dt.name}</h1>
        <h2>{dt.age}</h2>
      </div>
    })}
    </div>
  )
}

export default Display
