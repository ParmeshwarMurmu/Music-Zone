import axios from "axios";
import { Dispatch } from "redux";
import { userPlaylistAllPlaylist, userPlaylistIsEorrAction, userPlaylistIsLoadingAction } from "../UserPlaylistReducer/reducer";
import { APP_URL, USER_PLAYLIST_ENDPOINT } from "../../Endpoints/Endpoints";

export const getAllUserPlaylistSong = (playlistName: string | undefined)=>(dispatch: Dispatch<any>)=>{
    const token = localStorage.getItem('musicToken')
    dispatch(userPlaylistIsLoadingAction(true))
    axios.get(`${APP_URL}${USER_PLAYLIST_ENDPOINT}/${playlistName}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res);
        dispatch(userPlaylistIsLoadingAction(false))
        dispatch(userPlaylistAllPlaylist(res.data.userPlaylist))

      })
      .catch((err) => {
        dispatch(userPlaylistIsEorrAction(true))
      })

}