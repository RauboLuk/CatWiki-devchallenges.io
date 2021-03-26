const { gql } = require("apollo-server");

const typeDefs = gql`
  type Breed {
    id: ID!
    "Breed's name"
    name: String!
    "Brief breed description"
    description: String!
    "Comma separated adjectives"
    temperament: String!
    "Breed's origin country"
    origin: String!
    "Life span"
    life_span: String!
    adaptability: Int!
    affection_level: Int!
    child_friendly: Int!
    grooming: Int!
    intelligence: Int!
    health_issues: Int!
    social_needs: Int!
    stranger_friendly: Int!
    "Id to get breed main image"
    reference_image_id: String!
  }

  type BreedName {
    id: ID!
    "Breed's name"
    name: String!
  }

  type ImageUrl {
    id: ID!
    "Url to image"
    url: String!
  }

  type BreedWithImgUrls {
    "Breed information"
    breed: Breed!
    "Urls to images"
    imagesUrls: [ImageUrl!]!
  }

  type Query {
    "Search for breed, return array"
    searchForBreed(str: String!): [BreedName!]!
    "Returns object with image url"
    getImageUrl(id: String!): ImageUrl!
    "Returns information about breed"
    getBreed(id: String!): Breed!
    "Returns breed information and images urls"
    getBreedWithImgUrls(id: String! limit: Int): BreedWithImgUrls!
  }
`;

module.exports = typeDefs;
