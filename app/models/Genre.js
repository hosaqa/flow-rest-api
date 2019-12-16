const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

const Genre = mongoose.model("Genre", genreSchema, "genres");

module.exports = Genre;
