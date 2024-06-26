
import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from '../SignUpReducer/reducer';
import loginReducer from '../LoginReducer/reducer'
import isAuthReducer from '../isAuthReducer/reducer'
import playlistReducer from '../PlaylistReducer/reducer';
import userPlaylistReducer from '../UserPlaylistReducer/reducer';
import playlist90Reducer from '../90sSongReducer/reducer';
import moreSongFromArtistReducer from '../MoreFromArtistReducer/reducer'
import arjitSongReducer from '../ArjitSinghReducer/reducer';
import armaanAndDarshanReducer from '../Armaan&DarshanReducer/reducer';
import honneySinghAndBadshahReducer from '../HonneySinghAndBadshahReducer/reducer';
import themeReducer from '../ThemeReducer/reducer';

export const store = configureStore({
    reducer: {
      themeName: themeReducer,
      honneySinghAndBadshahSongName: honneySinghAndBadshahReducer,
      armaanAndDarshanSongName: armaanAndDarshanReducer,
      arjitSingSongs: arjitSongReducer,
      moreSongsArt: moreSongFromArtistReducer,
      playlist90S: playlist90Reducer,
      userPlaylist: userPlaylistReducer,
      playlist: playlistReducer,
      isAuth: isAuthReducer,
      signUp: signUpReducer,
      login: loginReducer
    }
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

