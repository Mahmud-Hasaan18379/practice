// import React,{useState,useEffect} from 'react'
import { useLocation} from 'react-router';
// import { informations } from './Data';

const Blog = () => {

    // const [blogData , setBlogData] = useState()
    const location = useLocation()

// useEffect(()=>{
//     const data = informations.filter((info)=>info.title===title)
//     setBlogData(data[0].desc)
// },[])

  return (
    <div>
    <h1>{location.state.title}</h1>
      <p>{location.state.desc}</p>
    </div>
  )
}

export default Blog
