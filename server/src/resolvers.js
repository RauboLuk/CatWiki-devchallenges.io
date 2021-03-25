module.exports = {
  Query: {
    searchForBreed: async (_, { str }, { dataSources }) => {
      return dataSources.catAPI.searchForBreed(str);
    },
    getImageUrl: async (_, { id }, { dataSources }) => {
      return dataSources.catAPI.getImageUrl(id);
    },
    getBreed: async (_, { id }, { dataSources }) => {
      return dataSources.catAPI.getBreed(id);
    },
    getBreedWithImgUrls: async (_, { id, limit }, { dataSources }) => {
      return dataSources.catAPI.getBreedWithImgUrls(id, limit);
    },
  },
};
