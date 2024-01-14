
import { ObjectId } from "mongodb";

export interface allMusic {
    title: string,
    artist: string,
    album: string,
    picture: string,
    duration: string,
    releaseYear: string,
    _id: ObjectId,
    musicId: string

}