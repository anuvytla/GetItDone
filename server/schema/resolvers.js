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
	Mutation: {
		createUser: async (_root, args) => {
            try {
                const newUser = await User.create({
                    username: args.username,
                    email: args.email,
                    password: args.password,
                });
                return newUser;
            } catch (err) {
                throw new Error(err);
            }
        }

	},
};

module.exports = resolvers;
