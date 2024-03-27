import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/Store";
import { ObjectId } from "mongodb";

interface old90sSong {
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