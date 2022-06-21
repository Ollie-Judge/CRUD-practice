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
    const moviesList = await collection.find().toArray();
    console.log(moviesList);
  } catch (error) {
    console.log(error);
  }
};

// function for updating the database

// function for deleting the database
