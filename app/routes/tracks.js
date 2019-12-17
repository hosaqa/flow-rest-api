const express = require("express");
const router = express.Router();
const Track = require("../models/Track");
const utils = require("../utils");

router.get("/tracks", (req, res) => {
  const limit = parseFloat(req.query.limit) || null;
  const artist = req.query.artist;
  const genre = req.query.genre;

  const findParams = {};

  if (artist) {
    findParams.artist = artist;
  }

  if (genre) {
    findParams.genre = genre;
  }

  Track.find(findParams)
    .limit(limit)
    .populate("artist")
    .populate("genre")
    .exec((err, playlist) => {
      if (err) {
        res.status(500).send({ message: "Tracks fetching failed." });
      } else {
        const host = `${req.protocol}://${req.get("host")}`;

        res.send(
          playlist.map(track => {
            if (track.artist.img) {
              track.artist.img = utils.getAbsolutePath(host, track.artist.img);
            }

            track.genre.img = utils.getAbsolutePath(host, track.genre.img);

            track.src = utils.getAbsolutePath(host, track.src);

            return track;
          })
        );
      }
    });
});

module.exports = router;
