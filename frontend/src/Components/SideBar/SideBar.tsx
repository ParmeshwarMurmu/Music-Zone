import React, { useEffect, useRef } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { MdLibraryMusic } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CreatePlaylist } from './CreatePlaylist';
import { FaFolderOpen } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { Input } from '@chakra-ui/react';


export const SideBar = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Step 2: Focus on the input element when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);


  return (
    <div className='p-4'>


      {/* Home */}
      <div className='flex mb-2'>
        <div className='mr-6'>
          <IoHomeSharp fontSize={'20px'} color='' />
        </div>

        <div className='text-neutral-silver'>
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

        <div className='w-full'>

          <div className='flex justify-between mb-2'>
            <div><Link to={'/'}>Your Library </Link></div>
            <div className=''><CreatePlaylist /></div>
          </div>

          {
            <div className='flex justify-center items-center'>

              <div className='mr-2'>
                <FaFolderOpen fontSize={'20px'} />
              </div>
              <div>
                
                <Input  type='text'
                  className='mr-2 h-3'
                  placeholder='New Playlist'
                  ref={(el) => (inputRef.current = el)}


                   />
              </div>

              <div className='flex'>
                <TiTick fontSize={'20px'} className='mr-2' />
                <RxCross2 fontSize={'20px'} />

              </div>

            </div>
          }

        </div>


      </div>

      {/* Your Playlist */}
      <div>

      </div>

    </div>
  )
}
