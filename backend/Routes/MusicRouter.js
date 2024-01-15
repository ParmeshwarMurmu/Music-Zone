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
MusicRouter.get('/music/:filename', (req, res) => {
    const filename = req.params.filename;
    // const musicId = req.params.musicId
    // console.log(filename);
    // console.log("musicId", musicId);
    const filePath = path.join(__dirname, '../uploads/music', `${filename}`);
    // console.log(filePath);
    res.sendFile(filePath);
});

// Serve cover images
MusicRouter.get('/music/cover/:filename', async(req, res) => {

    // const filename = req.params.filename;
    // // const { filename, path } = req.file;
    // console.log("cover");
    // console.log(filename);
    // // const metadata = await mm.parseFile(path);
    // const filePath = path.join(__dirname, '../uploads/music', filename);
    // const metadata = await mm.parseFile(filePath);
    // const { picture } = metadata.common;
    // console.log(picture);
    // res.sendFile(picture.toString());

    try {
        const filename = req.params.filename;
        const filePath = path.join(__dirname, '../uploads/music', filename);
        const metadata = await mm.parseFile(filePath);
        const { picture } = metadata.common;

        // Send the image data as a response
        res.send({ coverImage: picture[0].data.toString('base64') });
    } catch (error) {
        res.status(500).send({ "err": error.message });
    }
});



module.exports = {
    MusicRouter
}