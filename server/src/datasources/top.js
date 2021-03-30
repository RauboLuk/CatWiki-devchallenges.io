const { DataSource } = require("apollo-datasource");
const Cat = require("../models/cat");

class TopCatsDB extends DataSource {
  async getMostSearched(limit = 10) {
    try {
      return await Cat.find().sort({'visited': -1}).limit(limit);
    } catch (error) {
      console.log(error);
    }
  }
  async addCat(cat) {
    const newCat = new Cat(cat);
    const savedCat = await newCat.save();
    return savedCat;
  }
  async findOneAndUpdate(cat) {
    return await Cat.findOneAndUpdate({ breedId: cat.breedId }, {
      name: cat.name,
      breedId: cat.breedId,
      imgId: cat.imgId,
      $inc: { visited: 1 }
    }, {
      new: true,
      upsert: true,
      useFindAndModify: false,
    });
  }
}

module.exports = TopCatsDB;
