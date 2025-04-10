import React, { useState } from 'react'
import './Page.css'
import {informations} from './Data'
import { Link  } from 'react-router'



const Blogs = () => {

    const [data , setData] = useState(informations)

    const truncate = (str , num)=>{
        if(str.length>num){
            return str.slice(0 , num) + '...'
        }else{
            return str
        }
    }

  return (
    <section>
        {data.map((dt) =>{
            const {id,title, desc} = dt;
            return <article key={dt.id}>
                <h1>{dt.title}</h1>
                <p>{truncate(desc , 100)}</p>
                <Link to={title } state={{id , title , desc}} style={{textDecoration:"none"}}>Loarn more..</Link>
            </article>
        })}
    </section>
  )
}

export default Blogs
