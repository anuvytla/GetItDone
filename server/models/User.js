const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	id: Number,
	username: String,
	email: String,
	password: String,
});

module.exports = model("User", userSchema);
