const { MongoDBNamespace } = require("mongodb");
class Movie {
  constructor(title, actor, info = "Not specified") {
    this.title = title;
    this.actor = actor;
    this.info = info;
  }
  // Function for adding a movie
  async add(collection) {
    await collection.insertOne(this);
    console.log("your movie has been added");
  }
  //List for movies in the database
  async list(collection) {
    return await collection.find().toArray();
  }
  // function for updating the database
  async update(collection) {
    await collection.updateOne(
      { title: this.title },
      {
        $set: {
          title: this.title,
          actor: this.actor,
          info: this.info,
        },
      }
    );
    console.log("Your movie has been updated");
  }
  // function for deleting the database
  async delete(collection) {
    await collection.deleteOne({ title: this.title });
    console.log("your movie has been deleted");
  }
}

module.exports = Movie;
