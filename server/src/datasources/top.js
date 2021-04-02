const { DataSource } = require("apollo-datasource");
const Cat = require("../models/cat");

class TopCatsDB extends DataSource {
  async getMostSearched(limit = 10) {
    return await Cat.find().sort({ visited: -1 }).limit(limit);
  }
  async findCatIncVisit(cat) {
    return await Cat.findOneAndUpdate(
      { breedId: cat.breedId },
      {
        name: cat.name,
        breedId: cat.breedId,
        imgId: cat.imgId,
        $inc: { visited: 1 },
      },
      {
        new: true,
        upsert: true,
        useFindAndModify: false,
      }
    );
  }
}

module.exports = TopCatsDB;
