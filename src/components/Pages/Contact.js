import React from 'react'
import { useNavigate } from 'react-router'

const Contact = () => {

    const navigate = useNavigate()
    
  return (
    <div>
            <h1>Contact Page</h1>
      <p> 1 React Router logo, six dots in an upward triangle one on top, two. A user‑obsessed, standards‑focused, multi‑strategy router you can deploy anywhere.</p>
      <p> 2 React Router logo, six dots in an upward triangle one on top, two. A user‑obsessed, standards‑focused, multi‑strategy router you can deploy anywhere.</p>
        <button onClick={()=>navigate('/')}>go to home</button>
    </div>
  )
}

export default Contact
