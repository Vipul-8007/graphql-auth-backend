const userType = require("./typeDefs/userType");
const userResolver = require("./resolvers/userResolver");

const typeDefs = [userType]; // GraphQL schema
const resolvers = [userResolver]; // GraphQL logic

module.exports = { typeDefs, resolvers };
