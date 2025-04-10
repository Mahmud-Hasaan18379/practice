import { useFormik } from 'formik'
import React from 'react'


const Login = () => {

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
    },
    onSubmit:(values , {resetForm}) => {
      console.log(values)
      resetForm({values : ""})
    }
  })


  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}/>
      <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange}/>
      <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default Login
