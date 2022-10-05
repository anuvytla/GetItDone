const { Profile, Task, TaskBoard } = require("../models");
const { Schema, model } = require("mongoose");

const db = require("../config/connection");

const profiles = [
	{
		"name": "bob",
		"email": "bob@email.com",
		"password": "password1",
	},
	{
		"name": "steve",
		"email": "steve@email.com",
		"password": "password2",
	},
	{
		"name": "jane",
		"email": "jane@email.com",
		"password": "password3",
	},
];
const tasks = [
	{
		title: "Create the express server",
		description: "start the routes afterwards",
		urgency: 1,
		boardId: "aaaaaaaaaaaaaaaaaaaaaaaa",
	},
	{
		title: "generate the react app",
		description: "make sure it is set up in a separate 'client' folder",
		urgency: 1,
		boardId: "aaaaaaaaaaaaaaaaaaaaaaaa",
	},
	{
		title: "CSS for the home page",
		description: "style the nav bar",
		urgency: 2,
		boardId: "aaaaaaaaaaaaaaaaaaaaaaaa",
	},
	{
		title: "server folder structure created",
		description: "schema, connection, models, and seeds created",
		urgency: 3,
		boardId: "aaaaaaaaaaaaaaaaaaaaaaaa",
	},
	{
		title: "get more lemons and limes",
		description: "need by friday",
		urgency: 1,
		boardId: "bbbbbbbbbbbbbbbbbbbbbbbb",
	},
	{
		title: "create advertisements",
		description: "poster, and signs to put around town",
		urgency: 1,
		boardId: "bbbbbbbbbbbbbbbbbbbbbbbb",
	},
	{
		title: "get a cooler to have ice and a pitcher",
		description: "at least 64oz",
		urgency: 2,
		boardId: "bbbbbbbbbbbbbbbbbbbbbbbb",
	},
];
const taskBoard = [
	{
		_id: "aaaaaaaaaaaaaaaaaaaaaaaa",
		title: "create a full stack web notes app",
		description: "make sure to find a creative name",
	},
	{
		_id: "bbbbbbbbbbbbbbbbbbbbbbbb",
		title: "Lemonade Sales",
		description: "tracking all tasks for lemonade stand",
	},
];

db.once("open", async () => {
	await Profile.deleteMany({});
	await Task.deleteMany({});
	await TaskBoard.deleteMany({});

	const insertProfiles = await Profile.insertMany(profiles);
	const insertTasks = await Task.insertMany(tasks);
	const insertTaskBoard = await TaskBoard.insertMany(taskBoard);
	console.log("seed = success");
	process.exit(0);
});
