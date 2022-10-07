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
		profile: Profile
		boardId: String
		taskBoard: TaskBoard
	}

	type TaskBoard {
		_id: ID
		title: String
		description: String
	}

	type Query {
		profiles: [Profile]!
		profile(profileId: ID!): Profile
		tasks: [Task]
		taskBoards: [TaskBoard]
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
			boardId: String!
		): Task
	}
`;

module.exports = typeDefs;
