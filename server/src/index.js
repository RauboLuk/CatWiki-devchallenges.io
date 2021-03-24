const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CatAPI = require("./datasources/cat");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    catAPI: new CatAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running!
  `);
});
