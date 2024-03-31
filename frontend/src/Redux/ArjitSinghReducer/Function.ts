import axios from "axios";
import { Dispatch } from "redux";
import { APP_URL, ARJIT_SINGH_SONGS } from "../../Endpoints/Endpoints";
import { arjitSingSongsIsErrorAction, arjitSingSongsIsLoadingAction, arjitSingSongSuccessAction } from "./reducer";

export const getArjitSinghSong = ()=>(dispatch: Dispatch<any>)=>{
  
    console.log("Arjit SIngh");
    
    dispatch(arjitSingSongsIsLoadingAction(true))
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