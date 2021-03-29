const { DataSource } = require("apollo-datasource");
const Cat = require("../models/cat");

class TopCatsDB extends DataSource {
  async getMostSearched() {
    try {
      return await Cat.find();
    } catch (error) {
      console.log(error);
    }
  }
  async addCat(catId) {
    const cat = new Cat({
      name: 'Penel',
      breedId: 'Penel',
      imgId: 'Penel'
    });
    const savedCat = await cat.save();
    console.log(savedCat);
  }
}

module.exports = TopCatsDB;
