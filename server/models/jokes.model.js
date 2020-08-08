const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
	question: String,
	punchline: Number
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;