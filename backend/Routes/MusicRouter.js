const express = require('express')
const fs = require('fs')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const mm = require('music-metadata');
const { MusicModel } = require('../Models/MusicSchema');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uniqueDirectory = uuidv4();
        cb(null, `./uploads/music/${uniqueDirectory}`);
    },
    filename: (req, file, cb) => {
        const uniqueFileName = uuidv4() + '-' + file.originalname;
        cb(null, uniqueFileName);
    },
});


const MusicRouter = express.Router()

MusicRouter.get('/allMusic', async (req, res) => {
    try {
        const allMusic = await MusicModel.find();
        res.status(200).send({ "allMusic": allMusic })

    } catch (error) {
        res.status(400).send({ "err": error })
    }
})


// Serve music files /:musicId/:title
MusicRouter.get('/music/:musicId', (req, res) => {
    // const filename = req.params.title;
    const musicId = req.params.musicId
    console.log("musicId", musicId);
    const filePath = path.join(__dirname, '../uploads/music', `${musicId}`);
    console.log(filePath);
    res.sendFile(filePath);
});

// Serve cover images
MusicRouter.get('/cover/:filename', (req, res) => {
    const filename = req.params.filename;
    // const filePath = path.join(__dirname, '../uploads/covers', filename);
    res.sendFile({"loading": "msg"});
});



module.exports = {
    MusicRouter
}