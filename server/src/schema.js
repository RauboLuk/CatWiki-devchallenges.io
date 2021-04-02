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
    "Id to get breed main image"
    imgId: String!
  }

  type ImageUrl {
    id: ID!
    "Url to image"
    url: String!
  }

  type BreedWithImgUrlsResponse {
    success: Boolean!
    "Breed information"
    breed: Breed
    "Urls to images"
    imagesUrls: [ImageUrl]
  }

  type CatToplist {
    "Breed's name to display"
    name: String!
    "Breed's id"
    breedId: String!
    "Id to get breed main image"
    imgId: String!
    "How many times breed info was visited"
    visited: Int!
  }

  type CatToplistWithBreed {
    "Breed's name to display"
    name: String!
    "Breed's id"
    breedId: String!
    "Id to get breed main image"
    imgId: String!
    "How many times breed info was visited"
    visited: Int!
    "Information about breed"
    breed: Breed!
    "id, url to image"
    breedImg: ImageUrl!
  }

  type Query {
    "Search for breed, return array"
    searchForBreed(str: String!): [BreedName!]!
    "Returns object with image url"
    getImageUrl(id: String!): ImageUrl
    "Returns information about breed"
    getBreed(id: String!): Breed!
    "Returns breed information and images urls"
    getBreedWithImgUrls(id: String!, limit: Int): BreedWithImgUrlsResponse!
    "Returns most visited cat breeds"
    getMostSearched(limit: Int): [CatToplistWithBreed!]
  }

  type Mutation {
    "Increments breed visits or creates a new entry"
    addCatVisit(name: String!, breedId: String!, imgId: String!): CatToplist!
  }
`;

module.exports = typeDefs;
