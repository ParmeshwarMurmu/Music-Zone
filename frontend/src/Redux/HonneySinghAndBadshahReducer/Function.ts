import axios from "axios";
import { Dispatch } from "redux";
import { honneySinghAndBadshahSongIsErrorAction, honneySinghAndBadshahSongIsLoadingAction, honneySinghAndBadshahSongSuccessAction } from "./reducer";
import { APP_URL, HONNEY_SINGH_AND_BADSHAH_SONGS,  } from "../../Endpoints/Endpoints";

export const gethonneySinghAndBadshahSong = ()=>(dispatch: Dispatch<any>)=>{
  
    console.log("honneySinghAndBadshahSong");
    
    dispatch(honneySinghAndBadshahSongIsLoadingAction(true))
    axios.get(`${APP_URL}${HONNEY_SINGH_AND_BADSHAH_SONGS}`)
      .then((res) => {
        console.log(res);
        dispatch(honneySinghAndBadshahSongIsLoadingAction(false));
        dispatch(honneySinghAndBadshahSongSuccessAction(res.data.honneySinghAndBadshah))

      })
      .catch((err) => {
        dispatch(honneySinghAndBadshahSongIsErrorAction(true))
      })

}