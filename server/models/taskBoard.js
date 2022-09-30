const { Schema, model } = require("mongoose");

const taskBoardSchema = new Schema({
	id: Number,
	title: String,
	description: String,
	// probably add a user_id to this that refers to user id
	// userId: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "User",
	// },
});

module.exports = model("TaskBoard", taskBoardSchema);
