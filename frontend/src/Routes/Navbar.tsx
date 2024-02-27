import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'
import { Avatar, WrapItem } from '@chakra-ui/react'
import { useAppSelector } from '../Redux/Store/Hook'
import { isAuthValueFromReduxStore } from '../Redux/isAuthReducer/reducer'


export const Navbar = () => {

  const isAuth = useAppSelector(isAuthValueFromReduxStore)
  console.log(isAuth, "isAuth");



  return (
    <div className='pr-4 mb-2 flex'>
      {
        !isAuth && <div className='mr-4'>
          <Link to={'/login'}>Login</Link>
        </div>
      }

      { !isAuth && <div className='mr-4'>
        <Link to={'/signUp'}>Sign Up</Link>
      </div>
     }

      <div className='mr-4'>
        <Link to={'/uploadMusic'}>Upload Music</Link>
      </div>

      <WrapItem >
        <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
      </WrapItem>
    </div>
  )
}
