var express = require('express');
const { route } = require('..');
var router = express.Router();

const {
    createMovie,
    updateMovie,
    getMovie,
    getAllMovies,
    deleteMovie,
} = require('./controller/movieController')

router.get('/', function (req, res, next) {
    res.send('this is movie directory');
});

router.post('/create-movie', createMovie)
router.get('/get-all-movies', getAllMovies)
router.post('/get-one-movie/', getMovie)
router.put('/update-movie/', updateMovie)
router.delete('/delete-movie/', deleteMovie)

module.exports = router