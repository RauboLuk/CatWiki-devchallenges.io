module.exports = {
  Query: {
    searchForBreed: async (_, { str }, { dataSources }) => {
      return await dataSources.catAPI.searchForBreed(str);
    },
    getImageUrl: async (_, { id }, { dataSources }) => {
      return await dataSources.catAPI.getImageUrl(id);
    },
    getBreed: async (_, { id }, { dataSources }) => {
      return await dataSources.catAPI.getBreed(id);
    },
    getBreedWithImgUrls: async (_, { id, limit }, { dataSources }) => {
      return await dataSources.catAPI.getBreedWithImgUrls(id, limit);
    },
    getMostSearched: async (_, { limit }, { dataSources }) => {
      const topBreeds = await dataSources.topCatsDB.getMostSearched(limit);
      const breedsInfo = await Promise.all(
        topBreeds.map(breed => dataSources.catAPI.getBreed(breed.breedId)
        )
      )
      const breedImg = await Promise.all(
        topBreeds.map(breed => dataSources.catAPI.getImageUrl(breed.imgId))
      )
      let response = [];
      for (let i = 0; i < topBreeds.length; i++) {
        response.push({
          id: topBreeds[i].id,
          name: topBreeds[i].name,
          breedId: topBreeds[i].breedId,
          imgId: topBreeds[i].imgId,
          visited: topBreeds[i].visited,
          breed: breedsInfo[i],
          breedImg: breedImg[i],
        })
      }
      return response;
    },
  },
  Mutation: {
    addCatVisit: async (_, catData, { dataSources }) => {
      return await dataSources.topCatsDB.findCatIncVisit(catData);
    },
  },
};
