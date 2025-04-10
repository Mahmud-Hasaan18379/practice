import React from 'react'
import DisplayTodo from './DisplayTodo'

const Todo = ({info , getId }) => {


    return (
    <div>
      {info.map((inf ) => < DisplayTodo key={inf.id}  inf={inf}  getId={getId} />)}
    </div>
  )
}

export default Todo
