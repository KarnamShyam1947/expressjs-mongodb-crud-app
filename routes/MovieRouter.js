const express = require("express")
const {
    getMovie,
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/MovieController")

const movieRouter = express.Router()

movieRouter.route("/:id")
            .get(getMovie)
            .put(updateMovie)
            .delete(deleteMovie)

movieRouter.route("/")
            .get(getMovies)
            .post(createMovie)

module.exports = movieRouter;
