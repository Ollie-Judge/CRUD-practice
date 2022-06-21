require("dotenv").config();

const { MongoClient, Collection } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://OllieJudge:i4Iaf3i33dbBKo7e@cluster0.cduml.mongodb.net/?retryWrites=true&w=majority"
);

const connection = async () => {
  try {
    await client.connect();
    console.log("success");
    const db = client.db("Movies");
    return db.collection("Movies");
  } catch (error) {
    console.log(error);
  }
};

// connection();
