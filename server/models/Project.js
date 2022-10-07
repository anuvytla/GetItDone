const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
	id: Number,
	title: String,
	description: String,
});

module.exports = model("Project", ProjectSchema);
