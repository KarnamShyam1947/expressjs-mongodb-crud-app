const mongoose = require("mongoose")

const MovieSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Movie name is required"]
        },
        description: {
            type: String,
            required: [true, "Movie description is required"]
        },
        rating: {
            type: Number
        },
        duration: {
            type: Number
        },
        genre: {
            type: [String]
        }
    },
    {
        collection: 'movies',
        timestamps: true
    }
);

const MovieModel = mongoose.model("Movie", MovieSchema)

module.exports = MovieModel
