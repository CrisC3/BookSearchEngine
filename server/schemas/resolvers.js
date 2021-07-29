const { User } = require("../models");

const resolvers = {
	Query: {
		users: async () => {
			return User.find({});
		},
	},
	Mutation: {
		createUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
	},
};

module.exports = resolvers;
