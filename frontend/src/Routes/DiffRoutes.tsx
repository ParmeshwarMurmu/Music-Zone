import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignUp } from './SignUp'
import { Login } from './Login'




export const DiffRoutes = () => {
    return (
        <div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </div>
      )
}
