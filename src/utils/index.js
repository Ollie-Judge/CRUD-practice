// Function for adding a movie

exports.addMovie = async (collection, movieObj) => {
  try {
    const addEntry = await collection.insertOne(movieObj);
    console.log(addEntry);
  } catch (error) {
    console.log(error);
  }
};

//List for movies in the database

exports.listMovies = async (collection) => {
  try {
    const movieList = await collection.find().toArray();
    console.log(movieList);
  } catch (error) {
    console.log(error);
  }
};

// function for updating the database

exports.updateMovies = async (collection, movieObj) => {
  try {
    const movieUpdate = await collection.findOne().updateOne(movieObj);
    console.log(movieUpdate);
  } catch (error) {
    console.log(error);
  }
};

// function for deleting the database

exports.deleteMovies = async (collection, movieObj) => {
  try {
    const movieDelete = await collection.deleteOne(movieObj);
    console.log(movieDelete);
  } catch (error) {
    console.log(error);
  }
};
