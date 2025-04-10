import React from 'react'
import DisplayCountry from './DisplayCountry';

const Country = ({countries , getname}) => {
  return (
    <div>
      {countries.map((country)=><DisplayCountry country={country}  getname={getname}/>)}
    </div>
  )
}

export default Country
