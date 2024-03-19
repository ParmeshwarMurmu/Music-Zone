import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const UserPlaylist = () => {
   const {playlistName} = useParams();

   useEffect(()=>{
    
   }, [playlistName])
    return (
        <div>
            userPlaylist {playlistName}
        </div>
    )
}

export default UserPlaylist
