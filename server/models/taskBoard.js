const { Schema, model } = require("mongoose");
const Tasks = require("./Tasks");

const taskBoardSchema = new Schema({
	id: Number,
	title: String,
	description: String,
	projectId: {
		type: Schema.Types.ObjectId,
		ref: "Project",
	},
	tasks: {
		type: Schema.Types.ObjectId,
		ref: "Task",
	},
});

module.exports = model("TaskBoard", taskBoardSchema);
