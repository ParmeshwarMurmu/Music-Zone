import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'
import { Avatar, WrapItem } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <div className='pr-4 mb-2 flex'>
      <div className='mr-4'>
        <Link to={'/login'}>Login</Link>
      </div>

      <div className='mr-4'>
        <Link to={'/signUp'}>Sign Up</Link>
      </div>

      <div className='mr-4'>
        <Link to={'/uploadMusic'}>Upload Music</Link>
      </div>

      <WrapItem >
        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
      </WrapItem>
    </div>
  )
}
