
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