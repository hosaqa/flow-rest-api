const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist");
const Track = require("../models/Track");
const utils = require("../utils");


router.get("/artists", (req, res) => {
  Artist.find({}).exec((err, artists) => {
    if (err) {
      res.send({ message: "Artists fetching failed." });
    } else {
      res.send(artists);
    }
  });
});

router.get("/artist/:id", (req, res) => {
  Track.find({artist: req.params.id})
    .populate("artist")
    .populate("genre")
    .exec((err, playlist) => {
      if (err) {
        res.status(500).send({ message: "Artist not found." });
      } else {
        const host = `${req.protocol}://${req.get("host")}`;

        res.send({
          uri: `artist:${req.params.id}`,
          playlistData: playlist.map(track => {
            if (track.artist.img) {
              track.artist.img = utils.getAbsolutePath(host, track.artist.img);
            }

            track.genre.img = utils.getAbsolutePath(host, track.genre.img);

            track.src = utils.getAbsolutePath(host, track.src);

            return track;
          })
        });
      }
    });
});

module.exports = router;
