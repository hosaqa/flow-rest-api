const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
const Track = require("../models/Track");
const Artist = require("../models/Artist");

router.get("/tracks", (req, res) => {
  Track.collection.find().toArray((err, playlist) => {
    if (err) {
      res.send({ message: "An error has occurred" });
    } else {
      res.send({
        name: 'all_tracks',
        playlist: playlist.map(track => track.populate("artist")),
      });
    }
  });
});

module.exports = router;