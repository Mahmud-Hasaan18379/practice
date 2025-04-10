import React from 'react'
import { Navigate } from 'react-router'

const Protected = ({isLog ,children}) => {
if (!isLog) {
    return     <Navigate to='/'/>

} else {
    return children
}
}

export default Protected
