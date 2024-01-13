const express = require('express')
const fs = require('fs')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const mm = require('music-metadata')
// const mm = require('music-metadata');


const storage = multer.diskStorage({
    destination: './uploads/music',
    filename: function (req, file, cb) {
        const uniqueFileName = uuidv4() + '-' + file.originalname;
        cb(null, uniqueFileName);
    },
});

const upload = multer({ storage });

UploadMusicRouter = express.Router()


UploadMusicRouter.post('/uploadMusic', upload.single('music'), async(req, res) => {
    console.log("+++");

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
          }
      
          // You can access the uploaded file details using req.file
          const { filename, path } = req.file;

          const metadata = await mm.parseFile(path);
          const { title, artist, album, picture } = metadata.common;
          const coverImage = picture && picture.length > 0 ? picture[0].data.toString('base64') : null;
      
          // Perform any additional processing or save the file details to your database
          // ...
      
          res.status(200).json({
            message: 'File uploaded successfully',
            filename,
            path,
            metadata: { title, artist, album, coverImage },
        });

    } catch (error) {

    }
})


module.exports = {
    UploadMusicRouter
}