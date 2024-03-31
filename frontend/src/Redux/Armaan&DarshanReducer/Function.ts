import axios from "axios";
import { Dispatch } from "redux";
import { APP_URL, ARJIT_SINGH_SONGS } from "../../Endpoints/Endpoints";
import { armaanAndDarshanSongIsLoadingAction } from "./reducer";

export const getArmaanAndDarshanSong = ()=>(dispatch: Dispatch<any>)=>{
  
    console.log("Armaan");
    
    dispatch(armaanAndDarshanSongIsLoadingAction(true))
    axios.get(`${APP_URL}${ARJIT_SINGH_SONGS}`)
      .then((res) => {
        console.log(res);
        dispatch(arjitSingSongsIsLoadingAction(false));
        dispatch(arjitSingSongSuccessAction(res.data.arjitSingh))

      })
      .catch((err) => {
        dispatch(arjitSingSongsIsErrorAction(true))
      })

}