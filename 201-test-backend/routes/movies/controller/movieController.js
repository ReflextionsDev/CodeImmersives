const Movie = require("../model/Movie");

const createMovie = async (req, res) => {

    try {
        const { title, director, runtime, rating, description } = req.body

        let newMovie = new Movie({
            title: title,
            director: director,
            runtime: runtime,
            rating: rating,
            description: description
        })

        let savedMovie = await newMovie.save()

        res.status(200).json({
            message: "Added new movie.",
            payload: savedMovie
        })


    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllMovies = async (req, res) => {
    try {
        let allMovies = await Movie.find()
        res.status(200).json(
            allMovies
        )
    } catch (error) {
        res.status(500).json(error)
    }
}

const getMovie = async (req, res) => {
    try {
        const { id } = req.body
        console.log(req.body)
        let thisMovie = await Movie.findOne({ _id: id })
        res.status(200).json(thisMovie)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateMovie = async (req, res) => {
    try {
        const { id } = req.body
        let updateMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateMovie)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.body
        let deleteMovie = await Movie.findByIdAndDelete({ _id: id})
        res.status(200).json(deleteMovie)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createMovie,
    updateMovie,
    getMovie,
    getAllMovies,
    deleteMovie,
}