const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const artistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String
    }
  },

  {
    collection: "artists"
  }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
