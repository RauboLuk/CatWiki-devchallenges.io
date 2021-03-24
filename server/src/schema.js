const { gql } = require('apollo-server');

const typeDefs = gql`
  type Breed {
    id: ID!
    "Breed's name"
    name: String!
  }

  type Query {
    "Search breeds, return array"
    searchBreed(str: String!): [Breed!]!
  }
`;

module.exports = typeDefs;