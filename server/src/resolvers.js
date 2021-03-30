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
    getMostSearched: async (_, { limit }, { dataSources }) => {
      return dataSources.topCatsDB.getMostSearched(limit);
    },
  },
  Mutation: {
    addCat: async (_, { catId }, { dataSources }) => {
      const cat = await dataSources.catAPI.getBreed(catId);
      return dataSources.topCatsDB.addCat({
        name: cat.name,
        breedId: cat.id,
        imgId: cat.reference_image_id,
      });
    },
    catVisited: async (_, catData, { dataSources }) => {
      const cat = await dataSources.topCatsDB.findOneAndUpdate(catData);
      console.log(cat);
    },
  },
};
