import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'

export const Navbar = () => {
  return (
    <div className='pr-4 mb-2'>
      <Link to={'/login'} className='mr-4'>Login</Link>
      <Link to={'/signUp'}>Sign Up</Link>
    </div>
  )
}
