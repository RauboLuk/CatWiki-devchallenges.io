const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breedId: {
    type: String,
    required: true,
  },
  imgId: {
    type: String,
    required: true,
  },
  visited: {
    type: Number,
    required: true,
    default: 0,
  }
});

catSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Cat", catSchema);
