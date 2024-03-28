const mongoose = require('mongoose')

const musicSchema = mongoose.Schema({
    filename: String,
    title: String,
    artist: String,
    album: String,
    picture: String,
    durationInMinutes: String,
    releaseYear: String,
    musicId: String

}, {
    versionKey: false
})

const MusicModel = mongoose.model("music", musicSchema)

module.exports = {
    MusicModel
}