const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
	}

	type Mutation {
		createUser(username: String!, email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
