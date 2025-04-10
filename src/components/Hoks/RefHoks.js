import React , {useRef} from 'react'


const RefHoks = () => {
    const name  = useRef()
    const email  = useRef()
    
    const submit = (e) => {
        e.preventDefault()
        console.log(name.current.value,email.current.value)
    }



  return (
    <div>
        <form onSubmit={submit}>
        <input type='text' ref={name}></input>
        <input type='email'  ref={email}></input>
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default RefHoks
