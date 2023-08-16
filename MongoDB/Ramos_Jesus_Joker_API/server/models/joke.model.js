const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setUp: {
        type: String,
        required: [true, "Set up joke is required"],
        minLength: [10, "Set up must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minLength: [3, "Set up must be at least 3 characters long"]
    }
}, { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema)
module.exports = Joke