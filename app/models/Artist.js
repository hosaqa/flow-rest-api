const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});

const Artist = mongoose.model("Artist", artistSchema, "artists");

module.exports = Artist;
