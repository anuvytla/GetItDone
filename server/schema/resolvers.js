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


const { AuthenticationError } = require('apollo-server-express');
const { Profile, Task } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    tasks: async (parent, { boardId }) => {
      return Task.find({ boardId: boardId });
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
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    updateTaskStatus: async (parent, { _id, status }) => {
      return Task.findOneAndUpdate(
        { _id: _id },
        {
          status: status
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
