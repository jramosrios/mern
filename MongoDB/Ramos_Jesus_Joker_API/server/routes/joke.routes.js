const JokeController = require("../controllers/joke.controller")

module.exports = (app) => {
    app.post('/api/newJoke', JokeController.createJoke)
    app.get('/api/jokes', JokeController.getAllJokes)
    app.get('/api/oneJoke/:id', JokeController.getOneJoke)
    app.put('/api/updateJoke/:id', JokeController.updateJoke)
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke)
}