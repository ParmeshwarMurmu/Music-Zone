import React, { useContext, useEffect, useRef, useState } from 'react'
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
import { Input, useToast } from '@chakra-ui/react';
import { appContent } from '../../ContextApi/ContextApi';
import axios from 'axios';
import { APP_URL, CREATE_NEW_PLAYLIST_ENDPOINT, USER_ALL_PLAYLIST_ENDPOINT } from '../../Endpoints/Endpoints';
import { useAppDispatch, useAppSelector } from '../../Redux/Store/Hook';
import { isAuthValueFromReduxStore } from '../../Redux/isAuthReducer/reducer';
import { playlistAllUserPlaylist, usersPlaylistValueFromReduxStore } from '../../Redux/PlaylistReducer/reducer';
import { MdDelete } from "react-icons/md";
import DeletePlaylist from './DeletePlaylist';


export const SideBar = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const toast = useToast();
  const { createPlaylist, setCreatePlaylist } = useContext(appContent);
  const [playlistName, setPlaylistName] = useState<string>('')
  const isAuth = useAppSelector(isAuthValueFromReduxStore);
  const dispatch = useAppDispatch();

  // Getting  user playlist from redux store
  const userPlaylist = useAppSelector(usersPlaylistValueFromReduxStore)
  // User Authentication Token
  const token = localStorage.getItem('musicToken')
  // Function to handle newPlaylistFolderName
  const newPlaylistFolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value)
  }

  // Function to execute saveNewPlaylistHandler
  const saveNewPlaylistHandler = () => {

    axios.post(`${APP_URL}${CREATE_NEW_PLAYLIST_ENDPOINT}`, { playlistName }, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res);
        toast({
          title: `${res.data.message}`,
          position: 'top-right',
          status: 'success',
          isClosable: true,
          duration: 2000,
        })
        setCreatePlaylist(false)
      })
  }

  
  

  useEffect(() => {
    if (isAuth) {
      axios.get(`${APP_URL}${USER_ALL_PLAYLIST_ENDPOINT}`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
        .then((res) => {
          // console.log(res);
          dispatch(playlistAllUserPlaylist(res.data.userPlaylist))
        })
    }
  }, [createPlaylist])


  console.log("userPlaylist", userPlaylist);
  

  // Function to delete user Playlist
  const handleDelete = (playlistId: string) => {
    // Implement your logic to delete the playlist with the given ID
    console.log("Deleting playlist with ID:", playlistId);
};



  useEffect(() => {
    // Step 2: Focus on the input element when the component mounts
    if (createPlaylist && inputRef.current) {
      inputRef.current.focus();
    }
  }, [createPlaylist]);




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
            createPlaylist && <div className='flex justify-center items-center'>

              <div className='mr-2'>
                <FaFolderOpen fontSize={'20px'} />
              </div>


              <div>

                <Input type='text'
                  className='mr-2 h-3'
                  placeholder='New Playlist'
                  ref={(el) => (inputRef.current = el)}
                  onChange={newPlaylistFolderName}


                />
              </div>

              <div className='flex'>
                <TiTick fontSize={'20px'}
                  className='mr-2 hover:cursor-pointer'
                  onClick={saveNewPlaylistHandler}
                />

                <RxCross2 fontSize={'20px'}
                  onClick={() => { setCreatePlaylist(false) }}
                  className='mr-2 hover:cursor-pointer'

                />


              </div>

            </div>
          }


          {/* User Playlist */}

          {
            userPlaylist.length > 0 && <div>
              {
                userPlaylist.map((el) => (
                  <div className='flex justify-between '>

                    <div className='flex justify-center items-center'>
                      <FaFolderOpen fontSize={'20px'} />

                      <p className='ml-2'>{el.playlistName}</p>
                    </div>

                    <DeletePlaylist playlist={el} onDelete={() => handleDelete(el._id)} />

                    {/* <MdDelete fontSize={'20px'} className='cursor-pointer'  /> */}
                  </div>
                ))
              }


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
