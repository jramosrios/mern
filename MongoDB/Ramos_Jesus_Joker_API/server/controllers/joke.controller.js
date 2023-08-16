const Joke = require('../models/joke.model')

module.exports = {
    createJoke: (req, res) => {
        console.log(req.body)
        Joke.create(req.body)
            .then((newJoke) => {
                res.json(newJoke)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    getAllJokes: (req, res) => {
        Joke.find({})
            .then((allJokes) => {
                res.json(allJokes)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    getOneJoke: (req, res) => {
        const id = req.params.id
        Joke.findById(id)
            .then((oneJoke) => {
                res.json(oneJoke)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedJoke) => {
                res.json(updatedJoke)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
} 