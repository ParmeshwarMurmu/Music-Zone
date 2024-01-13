import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { UplodMusci } from '../Admin/UplodMusci'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/uploadMusic' element={<UplodMusci />} />
      </Routes>
    </div>
  )
}
