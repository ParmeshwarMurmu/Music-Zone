import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { AllRoutes } from './AllRoutes'
import { SideBar } from '../Components/SideBar/SideBar'

export const Home = () => {
  return (
    <div className='flex'>
      <div className='w-1/5'>
      <SideBar />
      </div>

      <div className='w-full flex flex-row-reverse'>
         <Navbar />
      </div>


    </div>
  )
}
