import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [Todo , setTod] = useState({title:'' , desc:''})
    const [valid , setValid] = useState(false)


    const change = (e) => {
        const name = e.target.name;
        setTod((prv)=>{
        return {...prv , [name]:e.target.value}
        })

        if (e.target.value.length<3) {
            setValid(false)
        } else {
            setValid(true)
        }
    }

    const submit = (e)=>{
        e.preventDefault()
        addTodo(Todo)
        setTod({title:'' , desc:''})
    }

  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' onChange={change} name='title' value={Todo.title} required></input>
        <input type='text' onChange={change} name='desc' value={Todo.desc} required></input>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default AddTodo
