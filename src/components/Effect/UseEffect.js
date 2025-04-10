import React,{useState,useEffect} from 'react'

const UseEfect = () => {

    const [todos , set]= useState(null)
    const [err , seterr]= useState(null)
    const [load , setLoad]= useState(true)
    console.log(todos)

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res)=>{
        if (!res.ok) {     
           setLoad(null)
          throw new Error("data not found")
          
        }
        return res.json()
      })
      .then((data) =>{
        setLoad(null)
        return  set(data)
      })
      .catch((err)=>{
        seterr(err.message)
      })

    },[]
    );


  return (
    <div>
      <h1>todos:</h1>
      {err && <p>{err}</p>}
      <p>{load && "Loading..."}</p>
    
{todos &&     todos.map((todo)=><p key={todo.id}>{todo.title}</p>)
}    
    </div>
  )
}

export default UseEfect
