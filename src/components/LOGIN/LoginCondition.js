
import React,{useState} from 'react'

export default function LoginCondition() {

const [users, update]=useState({name:'',email:''})
const {name , email}=users
 
    const changeHandle = (e)=>{
       update( {...users,[e.target.name]:e.target.value})
    }
    
    const submit = (e)=>{
        e.preventDefault()
        console.log(users)
    }


  return (
    <div>
        <form>
            <label>Name: <input type='text' name='name' value={name} onChange={changeHandle}></input></label>
            <br></br>
            <br></br>
            <label>Email: <input type='text' name='email'  value={email} onChange={changeHandle}></input></label>
            <br></br>
            <br></br>
            <button type='submit' style={{margin:"0px 55px"}} onClick={submit}>submit</button>
        </form>
      
    </div>
  )
}
