const { Schema, model } = require("mongoose");

const taskBoardSchema = new Schema({
	id: Number,
	title: String,
	description: String,
	projectId: {
		type: Schema.Types.ObjectId,
		ref: "Project",
	},
});

module.exports = model("TaskBoard", taskBoardSchema);
