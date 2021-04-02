module.exports.mostSearchedReducer = (topBreeds, breedsInfo, breedImg) => {
  let data = [];
  for (let i = 0; i < topBreeds.length; i++) {
    data.push({
      id: topBreeds[i].id,
      name: topBreeds[i].name,
      breedId: topBreeds[i].breedId,
      imgId: topBreeds[i].imgId,
      visited: topBreeds[i].visited,
      breed: breedsInfo[i],
      breedImg: breedImg[i],
    });
  }
  return data;
};
