const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
  dbName,
};

function DB_Connect() {
  return mongoose.connect(uri, clientOptions);
}

function DB_disconnect() {
  return mongoose.disconnect();
}

exports.DB_Connect = DB_Connect;
exports.DB_disconnect = DB_disconnect;