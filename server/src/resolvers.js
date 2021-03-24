module.exports = {
  Query: {
    searchBreed: async (_, { str }, { dataSources }) => {
      return dataSources.catAPI.searchBreed(str);
    },
  }
}