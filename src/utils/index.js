const { Collection } = require("mongodb");

exports.addMovie = async (collection, filmObj) => {
  try {
    const addEntry = await collection.insertOne(filmObj);
    console.log(addEntry);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async (collection) => {
  try {
    const filmList = await collection.find().toArray();
    console.log(filmList);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (collection, criteria, changes) => {
  try {
    const changed = await collection.updateOne(criteria, { $set: changes });
    console.log(changed);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (collection, criteria) => {
  try {
    const deleted = await collection.deleteOne(criteria);
    console.log(`${deleted} has been deleted`);
  } catch (error) {
    console.log(error);
  }
};
