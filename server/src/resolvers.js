module.exports = {
  Query: {
    searchForBreed: async (_, { str }, { dataSources }) => {
      return dataSources.catAPI.searchForBreed(str);
    },
    getImageUrl: async (_, { id }, { dataSources }) => {
      return dataSources.catAPI.getImageUrl(id);
    }
  }
}