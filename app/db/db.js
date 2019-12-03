const mongoose = require("mongoose");
const dbConfig = require("../../config/db");

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useCreateIndex: true
});
