const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
	id: Number,
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
});

module.exports = model("Task", taskSchema);
