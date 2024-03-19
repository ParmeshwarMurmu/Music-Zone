import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { UplodMusci } from '../Admin/UplodMusci'
import { SingleMusicPage } from './SingleMusicPage'
import { WithoutSideBarLayout } from './WithoutSideBarLayout'
import { WithSideBarLayout } from './WithSideBarLayout'
import UserPlaylist from '../Components/UserPlaylist/UserPlaylist'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <WithSideBarLayout>

        <Home />
          </WithSideBarLayout>
        } />
        <Route path='/login' element={ <Login />} />
        <Route path='/signUp' element={
          <WithoutSideBarLayout>

            <SignUp />
          </WithoutSideBarLayout>
        }
        />
        <Route path='/uploadMusic' element={<UplodMusci />} />
        <Route path='/singleMusic' element={<SingleMusicPage />} />
        <Route path='/playlist/:playlistName' element={<UserPlaylist />} />
      </Routes>
    </div>
  )
}
