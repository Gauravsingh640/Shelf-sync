const mongoose = require("mongoose");

const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://gauravsingh71205:gauravsingh71205@ac-mrgixrf-shard-00-00.md0oc1p.mongodb.net:27017,ac-mrgixrf-shard-00-01.md0oc1p.mongodb.net:27017,ac-mrgixrf-shard-00-02.md0oc1p.mongodb.net:27017/?ssl=true&replicaSet=atlas-111p7l-shard-0&authSource=admin&appName=task/bookstore");
    console.log("MongoDB Atlas connected ✅");
  } catch (err) {
    console.log("Connection failed ❌", err);
  }
};

module.exports = databaseConnection;

