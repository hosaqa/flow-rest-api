const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist");
const helpers = require("./helpers");
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
  helpers.getPlaylist({req, res, findBy: 'artist'});
});

module.exports = router;
