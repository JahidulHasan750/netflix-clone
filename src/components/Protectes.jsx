import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
const Protectes = ({children}) => {
    const {user}= UserAuth()
    if(!user){
        return <Navigate to='/'></Navigate>
    }
    else{
        return children;
    }
 
}

export default Protectes