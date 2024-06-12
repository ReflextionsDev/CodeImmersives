const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    director: String,
    runtime: String,
    rating: String,
    description: String
})

module.exports = mongoose.model('movie', movieSchema)