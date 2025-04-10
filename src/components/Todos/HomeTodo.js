import React ,{useState} from  'react'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid';

const HomeTodo = () => {

    const [info , setInfo] = useState([])

    const getId = (id)=>{
       setInfo((prv)=>{
        return prv.filter((todo)=>todo.id!==id)
       })
    }

    const addTodo = (newTodo)=>{
        setInfo((prv)=>{
        return [...prv,{newTodo,id:uuidv4()}]
        })
    }

  return (
    <div>
      <AddTodo  addTodo={addTodo}/>
      <Todo info={info}  getId={getId}/>
    </div>
  )
}

export default HomeTodo
