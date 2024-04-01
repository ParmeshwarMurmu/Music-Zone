const express = require('express');
const { MusicModel } = require('../Models/MusicSchema');


const homeMusicRouter = express.Router();

homeMusicRouter.get('/90Songs', async(req, res)=>{
   

    try {
       
        const songs = await MusicModel.find({releaseYear: {$lt: 2001}});
        console.log("&&");
        // console.log(songs);
        res.status(200).send({"old": songs})
    } catch (error) {
        res.status(400).send({"message":"Something went wrong. Cannot remove song"})
    }
})

homeMusicRouter.get('/arjitSingh', async(req, res)=>{
   

    try {
        
        console.log("arjit Singh");
        // const songs = await MusicModel.find();
        const songs = await MusicModel.find({artist: { $regex: 'arijit', $options: 'i' } }).sort({_id: -1});
        // console.log(songs);
        res.status(200).send({"arjitSingh": songs})
    } catch (error) {
        res.status(400).send({"message":"Something went wrong. Cannot remove song"})
    }
})


homeMusicRouter.get('/armaanAndDarshan', async(req, res)=>{
   

    try {
        
        console.log('armaanAndDarshan');
        // const songs = await MusicModel.find();
        const songs = await MusicModel.find({ $or : [{artist: { $regex: 'armaan', $options: 'i' } }, {artist: { $regex: 'darshan', $options: 'i' } }]});
        // console.log(songs);
        res.status(200).send({"armaanAndDarshan": songs})
    } catch (error) {
        res.status(400).send({"message":"Something went wrong. Cannot find armaanAndDarshan song"})
    }
})

homeMusicRouter.get('/honneySinghAndBadshah', async(req, res)=>{
   

    try {
        
        const songs = await MusicModel.find({ $or : [{artist: { $regex: 'honey', $options: 'i' } }, {artist: { $regex: 'badshah', $options: 'i' } }]});
        // console.log(songs);
        res.status(200).send({"honneySinghAndBadshah": songs})
    } catch (error) {
        res.status(400).send({"message":"Something went wrong. Cannot find honneySinghAndBadshah song"})
    }
})


homeMusicRouter.delete('/music/:_id', async(req, res)=>{
   

    try {
        
        const { _id } = req.params;
        console.log("/id", _id);
        const songs = await MusicModel.findByIdAndDelete({_id})
        res.status(200).send({"message": "Song Deleted"})
    } catch (error) {
        res.status(400).send({"message":"Something went wrong. Cannot Delete"})
    }
})
module.exports = {
    homeMusicRouter
}