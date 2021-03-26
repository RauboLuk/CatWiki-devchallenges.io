const { RESTDataSource } = require("apollo-datasource-rest");

class CatAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.thecatapi.com/v1/";
  }

  async searchForBreed(str) {
    const response = await this.get(`breeds/search?q=${str}`);
    return Array.isArray(response)
      ? response.map((breed) => this.searchForBreedReducer(breed))
      : [];
  }

  searchForBreedReducer(breed) {
    return {
      id: breed.id,
      name: breed.name,
    };
  }

  async getImageUrl(id) {
    const response = await this.get(`images/${id}`);
    return response?.url ? { url: response.url, id: response.id } : {};
  }

  async getBreed(id) {
    const response = await this.get(`images/search?breed_id=${id}`);
    return response[0]?.breeds[0] ? this.breedReduced(response[0]) : {};
  }

  breedReduced(data) {
    const breed = data.breeds[0];
    return {
      id: breed.id,
      name: breed.name,
      description: breed.description,
      temperament: breed.temperament,
      origin: breed.origin,
      life_span: breed.life_span,
      adaptability: breed.adaptability,
      affection_level: breed.affection_level,
      child_friendly: breed.child_friendly,
      grooming: breed.grooming,
      intelligence: breed.intelligence,
      health_issues: breed.health_issues,
      social_needs: breed.social_needs,
      stranger_friendly: breed.stranger_friendly,
      reference_image_id: breed.reference_image_id,
    };
  }

  breedWithImgUrlsReducer(data) {
    const imagesUrls = data.map(({ id, url }) => ({ id, url }));
    return {
      success: true,
      breed: this.breedReduced(data[0]),
      imagesUrls,
    };
  }

  async getBreedWithImgUrls(id, limit = 8) {
    const response = await this.get(
      `images/search?size=small&order=RANDOM&limit=${limit}&breed_id=${id}`
    );
    return Array.isArray(response) && response[0]?.breeds
      ? this.breedWithImgUrlsReducer(response)
      : {success: false};
  }
}

module.exports = CatAPI;
