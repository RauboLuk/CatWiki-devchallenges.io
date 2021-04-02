const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const mongoose = require('mongoose');
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const CatAPI = require("./datasources/cat");
const TopCatsDB = require("./datasources/top");

const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    catAPI: new CatAPI(),
    topCatsDB: new TopCatsDB(),
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running!
  `);
});
