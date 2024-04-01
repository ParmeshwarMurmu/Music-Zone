import axios from "axios";
import { Dispatch } from "redux";
import { APP_URL, ARJIT_SINGH_SONGS, ARMAAN_AND_DARSHAN_SONGS } from "../../Endpoints/Endpoints";
import { armaanAndDarshanSongIsErrorAction, armaanAndDarshanSongIsLoadingAction, armaanAndDarshanSongSuccessAction } from "./reducer";

export const getArmaanAndDarshanSong = ()=>(dispatch: Dispatch<any>)=>{
  
    console.log("Armaan");
    
    dispatch(armaanAndDarshanSongIsLoadingAction(true))
    axios.get(`${APP_URL}${ARMAAN_AND_DARSHAN_SONGS}`)
      .then((res) => {
        console.log(res);
        dispatch(armaanAndDarshanSongIsLoadingAction(false));
        dispatch(armaanAndDarshanSongSuccessAction(res.data.armaanAndDarshan))

      })
      .catch((err) => {
        dispatch(armaanAndDarshanSongIsErrorAction(true))
      })

}