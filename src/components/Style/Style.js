import React, { useState } from 'react'
import  '../csss/Style.css'

const Style = () => {
    const [searchValue , setSearch]=useState('')
    const [valid , setValid]=useState(false)

console.log(searchValue)


    const change = (e)=>{
        setSearch(e.target.value)

        if (e.target.value.length < 2) {
            setValid(false)
        } else {
            setValid(true)
        }
    }

  

  return (
    <div  className={valid ? "valid" : "invalid"}>
    <h1 className='color'> Search</h1>
      <input style={{backgroundColor: valid ? "green" : "red"}} type='search' value={searchValue} onChange={change}></input>
    </div>
  )
}

export default Style
