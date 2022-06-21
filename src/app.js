const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addMovie, listMovies, updateMovies, deleteMovies } = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    await addMovie(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
      year: yargsObj.year,
    });
    console.log("success, entry added");
  } else if (yargsObj.list) {
    await listMovies(collection);
  } else if (yargsObj.update) {
    await updateMovie(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
      year: yargsObj.year,
    });
    console.log("success, entry updated");
  } else if (yargsObj.delete) {
    await deleteMovies(collection);
    console.log("success, entry deleted");
  } else {
    console.log("incorrect command");
  }
  await client.close();
};

app(yargs.argv);
