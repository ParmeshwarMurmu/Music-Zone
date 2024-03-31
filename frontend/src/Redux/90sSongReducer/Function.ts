import axios from "axios";
import { Dispatch } from "redux";
import { APP_URL, SONGS_90S, } from "../../Endpoints/Endpoints";
import { playlist90SAllSongs, playlist90SIsEorrAction, playlist90SIsLoadingAction } from "./reducer";

export const get90Song = ()=>(dispatch: Dispatch<any>)=>{
    // const token = localStorage.getItem('musicToken')
    console.log("90S");
    
    dispatch(playlist90SIsLoadingAction(true))
    axios.get(`${APP_URL}${SONGS_90S}`)
      .then((res) => {
        console.log(res);
        dispatch(playlist90SIsLoadingAction(false));
        dispatch(playlist90SAllSongs(res.data.old))

      })
      .catch((err) => {
        dispatch(playlist90SIsEorrAction(true))
      })

}