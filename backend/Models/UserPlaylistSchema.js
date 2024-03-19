const mongoose = require('mongoose')

const userPlaylistSchema = mongoose.Schema({
    playlistName: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    musicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'music',
        required: true
    }
}, {
    versionKey: false
})

const UserPlaylistModel = mongoose.model("userPlaylist", userPlaylistSchema)

module.exports = {
    UserPlaylistModel
}