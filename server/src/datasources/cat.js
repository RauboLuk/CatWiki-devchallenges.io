const { RESTDataSource } = require("apollo-datasource-rest");

class CatAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.thecatapi.com/v1/";
  }

  async searchBreed(str) {
    const response = await this.get(`breeds/search?q=${str}`);
    return Array.isArray(response)
      ? response.map((breed) => this.searchBreedReducer(breed))
      : [];
  }

  searchBreedReducer(breed) {
    return {
      id: breed.id,
      name: breed.name,
    };
  }
}

module.exports = CatAPI;
