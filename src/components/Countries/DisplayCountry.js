import React from 'react'

const DisplayCountry = ({country , getname}) => {
  console.log(country)
  return (
    <div>
      <img src={country.flags.png} alt={country.name.common}></img>
      <h1>{country.name.common}</h1>
      <button onClick={()=>getname(country.name.common)}>Remov</button>
      <br/>
      <br/>
    </div>
  )
}

export default DisplayCountry
