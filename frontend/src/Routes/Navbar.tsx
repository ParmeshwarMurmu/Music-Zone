import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'
import { Avatar, WrapItem } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../Redux/Store/Hook'
import { isAuthValueFromReduxStore } from '../Redux/isAuthReducer/reducer'
import { UserProfile } from '../Components/UserProfile/UserProfile'
import Hamberg from '../Components/SideBar/Hamberg'
import { FiMoon } from "react-icons/fi";
import { GoSun } from "react-icons/go";
import { themeSuccessAction, themeValueFromReduxStore } from '../Redux/ThemeReducer/reducer'
import { Tooltip } from '@chakra-ui/react'
import styled from 'styled-components'


export const Navbar = () => {

  const isAuth = useAppSelector(isAuthValueFromReduxStore)
  console.log(isAuth, "isAuth");
  const theme = useAppSelector(themeValueFromReduxStore)
  const dispatch = useAppDispatch()


  const lightThemeHandler = () => {
    dispatch(themeSuccessAction('light'))
  }

  const darkthemHandler = () => {
    dispatch(themeSuccessAction('dark'))
  }


  return (
    // justify-between flex w-full
    <DIV  className={`z-50  mb-2 
   
    flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-between small:justify-between mobiles-max:justify-between 
    `}
    >

      {/* <div>
        <Hamberg />
      </div> */}

      <div className={'2xl:hidden xl:hidden lg:hidden md:hidden sm:block'}>
        <Hamberg />
      </div>


      <div className={' bg-neutral-info 2xl:w-1/4 xl:w-1/4 lg:w-1/3 md:w-6/12 sm:w-6/12  mobiles-max:w-10/12'}>

        <div className='flex items-center p-1 justify-between '>

          {
            theme === 'dark' ? <div>
              {/* <Tooltip hasArrow label='Light Theme' bg='gray.300' color='black'> */}
              <GoSun onClick={lightThemeHandler}
               fontSize={'20px'}
               color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
               />
              {/* </Tooltip> */}
            </div> : <div>
              {/* <Tooltip hasArrow label='Dark Theme' bg='gray.300' color='black'> */}
              <FiMoon onClick={darkthemHandler}
               fontSize={'20px'}
               color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}
              
              />
              {/* </Tooltip> */}
            </div>
          }


          {
            !isAuth && <div className='mr-4'>
              <Link to={'/login'}
              className={`text-16 hover:underline font-semibold cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}
              >Login</Link>
            </div>
          }

          {!isAuth && <div className='mr-4'>
            <Link to={'/signUp'}
            className={`text-16 hover:underline font-semibold cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}
            >Sign Up</Link>
          </div>
          }

          {/* <div className=''>
            <Link to={'/uploadMusic'}
            className={`text-16  cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-textDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}
            >Upload Music</Link>
          </div> */}

          {
            isAuth && <UserProfile />
          }

        </div>
      </div>




    </DIV>
  )
}


const DIV = styled.div`



`