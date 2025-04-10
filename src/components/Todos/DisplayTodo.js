import React from 'react'
import Card from 'react-bootstrap/Card';


const DisplayTodo = ({inf  , getId}) => {
    const click = (e) => {
        getId(e)
    }

  return (
    <div key={inf.id}>
      <Card bg='dark' color='white'>
        <Card.Body>
            <Card.Title>{inf.newTodo.title}</Card.Title>
            <Card.Text>{inf.newTodo.desc}</Card.Text>
            <button onClick={()=>click (inf.id)}>Remove</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DisplayTodo
