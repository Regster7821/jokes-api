const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;