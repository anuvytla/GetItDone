const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
	}

	type Task {
		_id: ID
		title: String
		description: String
	}

	type TaskBoard {
		_id: ID
		title: String
		description: String
	}

	type Query {
		users: [User]
	}
	type Mutation {
		createUser(username: String!, email: String!, password: String!): User
	}
`;

module.exports = typeDefs;
