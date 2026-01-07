const { gql } = require("apollo-server-express");

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    createsAt: String
    updatedAt: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User] # Get all users (protected)
    user(id: ID!): User # Get user by ID
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!): AuthPayload
    loginUser(email: String!, password: String!): AuthPayload
  }
`;

module.exports = userType;
