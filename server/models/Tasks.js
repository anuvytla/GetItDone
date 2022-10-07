const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String,
	description: String,
	index: Number,
	// probably add a user_id to this that refers to user id
	userId: {
		type: Schema.Types.ObjectId,
		ref: "Profile",
	},
	// also need to associate each task with a board by board id
	boardId: {
		type: Schema.Types.ObjectId,
		ref: "TaskBoard",
	},
	status: {
		type: String,
		default: "To Do",
		enum: ["To Do", "Doing", "Done"],
	},
});

const Task = model("Task", taskSchema);

module.exports = Task;
