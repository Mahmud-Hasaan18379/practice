import React, { useState } from 'react'



const Toggle = () => {

    const [toggle, setToggle ] = useState(true)
    const news = 'Current Affairs Inc — This is one of the best magazines in this country. - Michael Moore, filmmaker. Some magazine I never heard of - Ben Shapiro, part time radio host. Print Magazine. News Briefing. Beautiful Art. Monthly Subscriptions.';

  return (
    <div>
    <div>
    <h2>This is one of the best magazines in this country</h2>
    <button onClick={()=>setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
    <p>{toggle && news}</p>
    </div>
    </div>
  )
}

export default Toggle
