const mongoose = require('mongoose')

const playlistSchema = mongoose.Schema({
    playlistName: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    music: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'music',
        // required: true
    }
}, {
    versionKey: false
})

const PlaylistModel = mongoose.model("playlist", playlistSchema)

module.exports = {
    PlaylistModel
}