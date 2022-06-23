const yargs = require("yargs");

const { connection, client } = require("./db/connection.js");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    await addMovie(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
      rating: yargsObj.rating,
    });
    console.log("Success, your entry has been added to the database");
  } else if (yargsObj.list) {
    await listMovies(collection);
  } else if (yargsObj.update) {
    let criteria = { title: yargsObj.update };

    let changes = {};

    if (yargsObj.title) {
      Object.assign(changes, { title: yargsObj.title });
    }
    if (yargsObj.actor) {
      Object.assign(changes, { actor: yargsObj.actor });
    }
    if (yargsObj.rating) {
      Object.assign(changes, { rating: yargsObj.rating });
    }
    await updateMovie(collection, criteria, changes);
  } else if (yargsObj.delete) {
    let criteria = { title: yargsObj.delete };
    await deleteMovie(collection, criteria);
  } else {
    console.log("the command you have entered is incorrect");
  }

  await client.close();
};

app(yargs.argv);
