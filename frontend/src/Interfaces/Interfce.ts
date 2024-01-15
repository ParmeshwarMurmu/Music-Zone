
import { ObjectId } from "mongodb";

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