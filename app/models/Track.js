const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const trackSchema = mongoose.Schema(
  {
    _id: {
      type: ObjectId,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    trackname: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  },

  {
    collection: "tracks"
  }
);

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
