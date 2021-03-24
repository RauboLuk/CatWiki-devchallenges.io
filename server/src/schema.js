const { gql } = require('apollo-server');

const typeDefs = gql`
  type Breed {
    id: ID!
    "Breed's name"
    name: String!
  }

  type ImageUrl {
    id: ID!
    "Url to image"
    url: String!
  }

  type Query {
    "Search for breed, return array"
    searchForBreed(str: String!): [Breed!]!
    "Returns object with image url"
    getImageUrl(id: String!): ImageUrl!
  }
`;

module.exports = typeDefs;