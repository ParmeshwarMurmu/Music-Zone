const express = require('express');
const { MusicModel } = require('../Models/MusicSchema');


const homeMusicRouter = express.Router();

homeMusicRouter.get('/90Songs', async(req, res)=>{
    console.log(">>>>>>");

    try {
        const songs = await MusicModel.find({ releaseYear: { $lt: 2000 } });
        console.log("&&");
        console.log(songs);
        res.status(200).send({"old": songs})
    } catch (error) {
        res.status(400).send({"message":"Something went wrong. Cannot remove song"})
    }
})


module.exports = {
    homeMusicRouter
}