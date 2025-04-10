import React, { useState } from 'react'

const Search = ({getSearch}) => {

    const [search , setSearch] =useState('')

  return (
    <div>
      <input type='text' onChange={(e)=>setSearch(getSearch(e.target.value))}></input>
    </div>
  )
}

export default Search
