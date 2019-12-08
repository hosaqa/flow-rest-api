const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const artistSchema = new mongoose.Schema(
  {
    id: {
      type: ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    img: {
      type: String
    }
  }
);

const Artist = mongoose.model("Artist", artistSchema, "artists");

module.exports = Artist;
