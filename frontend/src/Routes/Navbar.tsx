import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'
import { Avatar, WrapItem } from '@chakra-ui/react'
import { useAppSelector } from '../Redux/Store/Hook'
import { isAuthValueFromReduxStore } from '../Redux/isAuthReducer/reducer'
import { UserProfile } from '../Components/UserProfile/UserProfile'
import Hamberg from '../Components/SideBar/Hamberg'


export const Navbar = () => {

  const isAuth = useAppSelector(isAuthValueFromReduxStore)
  console.log(isAuth, "isAuth");



  return (
    // justify-between flex w-full
    <div className='  mb-2 flex  2xl:justify-end xl:justify-end lg:justify-end md:block
       w-full 2xl:w-4/12 xl:w-4/12 lg:w-4/12 md:w-5/12 sm:justify-between mobiles-max:justify-between'>

     

      <div className={'2xl:hidden xl:hidden lg:hidden md:hidden sm:block'}>
        <Hamberg />
      </div>

      <div className={'bg-action-warning flex  '}>
      

      {
        !isAuth && <div className='mr-4'>
          <Link to={'/login'}>Login</Link>
        </div>
      }

      {!isAuth && <div className='mr-4'>
        <Link to={'/signUp'}>Sign Up</Link>
      </div>
      }

      <div className=''>
        <Link to={'/uploadMusic'}>Upload Music</Link>
      </div>

      {
        isAuth && <UserProfile />
      }
      </div>



    </div>
  )
}
