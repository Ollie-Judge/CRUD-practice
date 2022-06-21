const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addMovie, listMovie } = require("./utils");

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
    await listMovie(collection);
  } else {
    console.log("incorrect command");
  }
  await client.close();
};

app(yargs.argv);
