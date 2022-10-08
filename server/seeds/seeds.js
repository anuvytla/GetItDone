const { Project, Profile, Task, TaskBoard } = require("../models");
const { Schema, model } = require("mongoose");

const db = require("../config/connection");

const profiles = [
	{
		name: "bob",
		email: "bob@email.com",
		password: "password1",
	},
	{
		name: "steve",
		email: "steve@email.com",
		password: "password2",
	},
	{
		name: "jane",
		email: "jane@email.com",
		password: "password3",
	},
];
const tasks = [
	{
		title: "Create the express server",
		description: "start the routes afterwards",
		index: 1,
		board_id: 1,
	},
	{
		title: "generate the react app",
		description: "make sure it is set up in a separate 'client' folder",
		index: 1,
		board_id: 1,
	},
	{
		title: "CSS for the home page",
		description: "style the nav bar",
		index: 2,
		board_id: 1,
	},
	{
		title: "server folder structure created",
		description: "schema, connection, models, and seeds created",
		index: 3,
		board_id: 1,
	},
	{
		title: "get more lemons and limes",
		description: "need by friday",
		index: 1,
		board_id: 2,
	},

	{
		title: "create advertisements",
		description: "poster, and signs to put around town",
		index: 1,
		board_id: 2,
	},

	{
		title: "get a cooler to have ice and a pitcher",
		description: "at least 64oz",
		index: 2,
		board_id: 2,
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
const projects = [
	{
		title: "Get It Done",
		description: "Awesome Project management tool",
	},
	{
		title: "Dummy Project",
		description: "Not So Awesome Project management tool",
	},
];
db.once("open", async () => {
	await Project.deleteMany({});
	await Profile.deleteMany({});
	await Task.deleteMany({});
	await TaskBoard.deleteMany({});

	const insertProjects = await Project.insertMany(projects);
	console.log(insertProjects);

	const insertProfiles = await Profile.insertMany(profiles);
	tasks[0].userId = insertProfiles[0]._id;
	tasks[1].userId = insertProfiles[0]._id;
	tasks[2].userId = insertProfiles[1]._id;
	tasks[3].userId = insertProfiles[1]._id;
	tasks[4].userId = insertProfiles[2]._id;
	tasks[5].userId = insertProfiles[2]._id;
	tasks[6].userId = insertProfiles[2]._id;

	taskBoard[0].projectId = insertProjects[0]._id;
	taskBoard[1].projectId = insertProjects[0]._id;
	const insertTaskBoard = await TaskBoard.insertMany(taskBoard);

	tasks[0].boardId = insertTaskBoard[0]._id;
	tasks[1].boardId = insertTaskBoard[0]._id;
	tasks[2].boardId = insertTaskBoard[0]._id;
	tasks[3].boardId = insertTaskBoard[0]._id;
	tasks[4].boardId = insertTaskBoard[1]._id;
	tasks[5].boardId = insertTaskBoard[1]._id;
	tasks[6].boardId = insertTaskBoard[1]._id;

	const insertTasks = await Task.insertMany(tasks);
	console.log("seed = success");
	process.exit(0);
});
