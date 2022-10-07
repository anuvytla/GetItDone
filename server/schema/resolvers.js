// const { User } = require("../models");

// const resolvers = {
// 	Query: {
// 		users: async () => {
// 			try {
// 				return await User.find();
// 			} catch (err) {
// 				throw new Error(err);
// 			}
// 		},
// 	},
// 	Mutation: {},
// };

// module.exports = resolvers;

const { AuthenticationError } = require("apollo-server-express");
const { Profile, Task, TaskBoard, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		profiles: async () => {
			return Profile.find();
		},

		profile: async (parent, { profileId }) => {
			return Profile.findOne({ _id: profileId });
		},
		tasks: async () => {
			return Task.find();
		},
		taskBoards: async () => {
			return TaskBoard.find();
		},
		tasksById: async (parent, { boardId }) => {
			return Task.find({ boardId: boardId });
		},
		taskBoardsByProject: async (parents, { projectId }) => {
			return TaskBoard.find({ projectId });
		},
		projects: async () => {
			return Project.find();
		},
	},

	TaskBoard: {
		tasks: async (taskBoard) => {
			return Task.find({ boardId: taskBoard._id });
		},
	},

	Project: {
		taskBoards: async (project) => {
			return TaskBoard.find({ projectId: project._id });
		},
	},

	Mutation: {
		addProfile: async (parent, { name, email, password }) => {
			const profile = await Profile.create({ name, email, password });
			const token = signToken(profile);

			return { token, profile };
		},
		login: async (parent, { email, password }) => {
			const profile = await Profile.findOne({ email });

			if (!profile) {
				throw new AuthenticationError("No profile with this email found!");
			}

			const correctPw = await profile.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect password!");
			}

			const token = signToken(profile);
			return { token, profile };
		},
		removeProfile: async (parent, { profileId }) => {
			return Profile.findOneAndDelete({ _id: profileId });
		},
		addTaskBoard: async (parent, { title, description }) => {
			const newTaskBoard = await TaskBoard.create({ title, description });
			return newTaskBoard;
		},
		addTask: async (parent, { title, description, userId, boardId }) => {
			const newTask = await Task.create({
				title,
				description,
				userId,
				boardId,
			});
			return newTask;
		},
		updateTaskStatus: async (parent, { _id, status }) => {
			return Task.findOneAndUpdate(
				{ _id: _id },
				{
					status: status,
				},
				{
					new: true,
					runValidators: true,
				}
			);
		},
		updateTask: async (parent, { _id, boardId }) => {
			return Task.findOneAndUpdate(
				{ _id: _id },
				{
					boardId: boardId,
				},
				{
					new: true,
					runValidators: true,
				}
			);
		},
	},
};

module.exports = resolvers;
