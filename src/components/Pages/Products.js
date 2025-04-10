import React, { useState } from 'react'
import { useParams , useSearchParams} from 'react-router';
const Users = () => {
const [name ,set] = useState()
const {id}=useParams()

const [query , setQuery] =useSearchParams()
const idd =  query.get('id')

const submit = (e)=>{
  e.preventDefault()
  setQuery({name:name})

}


console.log(id)
console.log(idd)
  return (
    <div>
    <form onSubmit={submit}> 
      <input value={name} type='text' onChange={(e)=>set(e.target.value)}></input>
      <button type='submit'>Addquery</button>
    </form>
      <h1>PRODUCTS PAGE</h1>
    </div>
  )
}

export default Users
