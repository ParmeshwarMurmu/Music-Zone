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
    <DIV className={`z-50  mb-2 
   
    flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-between small:justify-between mobiles-max:justify-between 
    `}
    >

      {/* <div>
        <Hamberg />
      </div> */}

      <div className={'2xl:hidden xl:hidden lg:hidden md:hidden sm:block'}>
        <Hamberg />
      </div>

      {/* */}
      <div className={` pt-1
      ${isAuth ? '2xl:w-1/12 xl:w-1/12 lg:w-2/12 md:w-2/12 sm:w-2/12 small:w-1/4 mobiles-max:w-1/4' : '2xl:w-1/6 xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/3 mobiles-max:w-2/5 small:w-3/5'} `}>

        <div className='flex items-center p-1 justify-between bg-gradient-to-r from-neutral-navbarBg1 to-neutral-navbarBg2'>

          {
            theme === 'dark' ? <div className='cursor-pointer'>
              {/* <Tooltip hasArrow label='Light Theme' bg='gray.300' color='black'> */}
              <GoSun onClick={lightThemeHandler}
                fontSize={'20px'}
                color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}

              />
              {/* </Tooltip> */}
            </div> : <div className='cursor-pointer'>
              {/* <Tooltip hasArrow label='Dark Theme' bg='gray.300' color='black'> */}
              <FiMoon onClick={darkthemHandler}
                fontSize={'20px'}
                color={`${theme === 'dark' ? '#E0E0E0' : 'rgb(17 24 39)'}`}

              />
              {/* </Tooltip> */}
            </div>
          }


          {
            !isAuth && <div className='mr-4 z-50 '>
              <Link to={'/login'}
                className={`text-16 hover:underline font-semibold cursor-pointer font-Inter ${theme === 'dark' ? 'text-neutral-headingDarkThemeColor' : 'text-neutral-lightThemeHeadingColor'} `}
              >Login</Link>
            </div>
          }

          {!isAuth && <div className='mr-4 z-50'>
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