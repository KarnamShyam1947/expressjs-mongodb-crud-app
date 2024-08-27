const mongoose  = require("mongoose");
const MovieModel = require("../models/MovieModel");

const getMovies = async (req, res) => {
    try {
        const movies = await MovieModel.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid movie ID format' });
        }

        const movie = await MovieModel.findById(id);

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMovie = async (req, res) => {
    try {
        const movie = await MovieModel.create(req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid movie ID format' });
        }

        const movie = await MovieModel.findByIdAndUpdate(id, req.body);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        const updatedMovie = await MovieModel.findById(id);
        res.status(200).json({
            message: 'Movie updated successfully',
            movie: updatedMovie
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid movie ID format' });
        }

        const movie = await MovieModel.findByIdAndDelete(id);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getMovie,
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}
