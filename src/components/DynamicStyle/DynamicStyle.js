import React, { useState } from 'react'
import './style.css'

const DynamicStyle = () => {

  const [style , setStyle] =useState(false)

  return (
    <div>
      <button className={style && 'styles'} onClick={()=>setStyle(!style)}>{style ? 'remove style' : 'add style'}</button>
    </div>
  )
}

export default DynamicStyle
