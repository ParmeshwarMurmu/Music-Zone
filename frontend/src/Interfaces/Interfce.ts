
import { UseDisclosureReturn } from "@chakra-ui/react";
import { ObjectId } from "mongodb";
import { Dispatch, ReactNode, SetStateAction } from "react";


export interface allMusic {
  filename: string,
  title: string,
  artist: string,
  album: string,
  picture: string,
  duration: string,
  releaseYear: string,
  _id: ObjectId,
  musicId: string

}

export interface signUpNewUser {
  email: string,
  password: string
}

export interface userData{
  email: string,
  password: string,
  _id: string,
  name: string,
  mobile: number

}

export const initialUserData: userData ={
  _id: '',
  email: '',
  password: '',
  name: '',
  mobile: 0,
}

export interface AppContextProps {
  // Add the properties you need in your context
  // exampleProperty: string;
  currentTrack: allMusic | null;
  setCurrentTrack: Dispatch<SetStateAction<allMusic | null>>;
  disclosure: UseDisclosureReturn;
  showMusicPlayer : boolean,
  setShowMusicPlyer:Dispatch<SetStateAction<boolean>>;
  createPlaylist: boolean;
  setCreatePlaylist : Dispatch<SetStateAction<boolean>>;
  userDetail: userData; // Include userDetail in the AppContextProps
  setUserDetail: (user: userData) => void;

}

export interface ContextApiProps {
  children: ReactNode;
}

export interface WithSidebarLayoutProps {
  children: ReactNode;
}



export interface WithoutSidebarLayoutProps {
  children: ReactNode;
}

export interface Playlist {
  _id: string;
  playlistName: string;
  user: string;
}

export interface DeletePlaylistProps {
  playlist: Playlist;
  onDelete: () => void;
  deletePlaylistLoading: boolean;
}