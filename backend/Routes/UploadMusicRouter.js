const express = require('express')
const fs = require('fs')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const mm = require('music-metadata');
const { MusicModel } = require('../Models/MusicSchema');
// const mm = require('music-metadata');

let musicId;
const storage = multer.diskStorage({
    destination: './uploads/music',
    filename:  function (req, file, cb) {
        // Construct a unique filename using uuidv4()
        musicId = uuidv4();
        const uniqueFileName = musicId + '-' + file.originalname;
        // // Construct the full file path
        // const filePath = './uploads/music/' + uniqueFileName;
        cb(null, uniqueFileName);

        
        // try {
        //     // fs.writeFileSync(filePath, file.buffer);
        //     await fs.writeFile(filePath, file.buffer);
        //     // You can also use the same musicId as part of the metadata
        //     const metadata = await mm.parseFile(filePath);
        //     const { title, artist, album, picture } = metadata.common;
        //     const releaseYear = metadata.common.year;
        //     const durationInSeconds = metadata.format.duration;
        //     const durationInMinutes = Math.floor(durationInSeconds / 60);
        //     const coverImage = picture && picture.length > 0 ? picture[0].data.toString('base64') : null;

        //     const newMusic = MusicModel({
        //         title,
        //         artist,
        //         album,
        //         picture: coverImage,
        //         releaseYear,
        //         durationInMinutes,
        //         musicId: uuidv4(),
        //     });
            
        //     console.log(title);
        //     await newMusic.save();
        //     cb(null, uniqueFileName);
        // } catch (error) {
        //     console.error(error);
        //     cb(error);
        // }
    },
});

const upload = multer({ storage });

UploadMusicRouter = express.Router()


UploadMusicRouter.post('/uploadMusic', upload.single('music'), async (req, res) => {
    console.log("+++");

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // You can access the uploaded file details using req.file
        const { filename, path } = req.file;

        const metadata = await mm.parseFile(path);
        let { title, artist, album, picture } = metadata.common;
        console.log(artist)
        console.log(album)
        title = title.split('-')[0]
        album = album.split('-')[0]
        artist = artist.split('-')[0]
        console.log(title)
        console.log(artist)
        console.log(album)
        const releaseYear = metadata.common.year; // Extract the release year
        const durationInSeconds = metadata.format.duration;
        const durationInMinutes = Math.floor(durationInSeconds / 60);

        // If there is a cover image in the metadata, extract it
        //   const coverImage = picture && picture.length > 0 ? `${req.protocol}://${req.get('host')}${staticFilesRoute}/${filename}` : null;

        const coverImage = picture && picture.length > 0 ? picture[0].data.toString('base64') : null;

        // Perform any additional processing or save the file details to your database
        // ...
        const newMusic = MusicModel({filename, title, artist, album, picture: coverImage, releaseYear, durationInMinutes, musicId: musicId })
        await newMusic.save()
        res.status(200).send({
            message: 'File uploaded successfully',
            // metadata: { title, artist, album, coverImage, releaseYear, durationInMinutes, metadata },
        });

    } catch (error) {

    }
})


module.exports = {
    UploadMusicRouter
}