const { User } = require("../models");

const resolvers = {
	Query: {
		users: async () => {
			try {
				return await User.find();
			} catch (err) {
				throw new Error(err);
			}
		},
	},
	Mutation: {},
};

module.exports = resolvers;
