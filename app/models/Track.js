const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  artist: {
    type: mongoose.Schema.Types.ObjectId,
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
});

const Track = mongoose.model("Track", trackSchema, "tracks");

module.exports = Track;
