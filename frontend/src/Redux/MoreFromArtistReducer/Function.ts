import axios from "axios";
import { Dispatch } from "redux";

import { moreSongFromArtistIsEorrAction, moreSongFromArtistIsLoadingAction, moreSongFromArtistSuccessAction } from "./reducer";
import { APP_URL, MORE_SONG_FROM_ARTIST } from "../../Endpoints/Endpoints";

export const MoreFromArtist = (album: string | undefined, year: string | undefined)=>(dispatch: Dispatch<any>)=>{
    const token = localStorage.getItem('musicToken')
    console.log(album, year)
    dispatch(moreSongFromArtistIsLoadingAction(true))
    axios.get(`${APP_URL}${MORE_SONG_FROM_ARTIST}/${album}/${year}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res, "+++++++");
        // dispatch(moreSongFromArtistIsEorrAction(false))
        // dispatch(moreSongFromArtistSuccessAction(res.data.album))

      })
      .catch((err) => {
        dispatch(moreSongFromArtistIsEorrAction(true))
      })

}