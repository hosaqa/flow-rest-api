const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const trackSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId,
      required: true
    },
    artist: {
      type: ObjectId,
      ref: "Artist",
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
  }
);

const Track = mongoose.model("Track", trackSchema, "tracks");

module.exports = Track;
