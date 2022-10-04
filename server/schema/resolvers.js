const { User, Task } = require("../models");

const resolvers = {
	Query: {
		users: async () => {
			try {
				return await User.find();
			} catch (err) {
				throw new Error(err);
			}
		},
        tasks: async () => {
			try {
				return await Task.find();
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

	 // field resolvers
	 User: {
        // root for field resolvers
        tasks: async (root) => {
            console.log(root);
            return await Task.find({ userId: root._id});
        },
    },

    Task: {
        // root for field resolvers
        user: async (root) => {
            console.log(root);
            return await User.findById(root.userId);
        },
    },
};

module.exports = resolvers;
