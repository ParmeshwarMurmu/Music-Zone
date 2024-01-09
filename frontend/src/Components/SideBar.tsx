import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { MdLibraryMusic } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';


export const SideBar = () => {
  return (
    <div className='p-4'>
      

      {/* Home */}
      <div className='flex mb-2'>       
      <div className='mr-6'>
       <IoHomeSharp fontSize={'20px'} color='' />
      </div>

      <div>
        <Link to={'/'}>Home</Link>
      </div>
      </div>


      {/* Search Bar */}

      <div className='flex mb-2'>       
      <div className='mr-6'>
       <ImSearch fontSize={'20px'} color='' />
      </div>

      <div>
        <Link to={'/'}>Search</Link>
      </div>
      </div>
   

      {/* Your Libbrary */}

      <div className='flex'>       
      <div className='mr-6'>
       <MdLibraryMusic fontSize={'20px'} color='' />
      </div>

      <div className='flex justify-between w-full'>
        <div><Link to={'/'}>Your Library </Link></div>
        <div><IoMdAdd fontSize={'20px'} color='' /></div>
      </div>
      </div>

    </div>
  )
}
