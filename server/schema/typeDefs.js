const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Profile {
		_id: ID
		name: String
		email: String
		password: String
		skills: [String]!
	}

	type Auth {
		token: ID!
		profile: Profile
	}

	type Task {
		_id: ID
		title: String
		description: String
		index: Int
		userId: String
		boardId: ID
		status: String
	}

	type TaskBoard {
		_id: ID
		title: String
		description: String
	}

	type Project {
		_id: ID
		title: String
		description: String
	}

	type Query {
		profiles: [Profile]!
		profile(profileId: ID!): Profile
		tasks: [Task]
		taskBoards: [TaskBoard]
		tasksById(boardId: ID!): [Task]
		taskBoardsByProject(projectId: ID!): [TaskBoard]
	}

	type Mutation {
		addProfile(name: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		removeProfile(profileId: ID!): Profile
		addTaskBoard(title: String!, description: String): TaskBoard
		addTask(
			title: String!
			description: String
			userId: String
			boardId: ID!
		): Task
		updateTaskStatus(_id: ID!, status: String!): Task
		updateTask(_id: ID!, boardId: ID!): Task
	}
`;

module.exports = typeDefs;
