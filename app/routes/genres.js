const express = require("express");
const router = express.Router();
const Genre = require("../models/Genre");
const helpers = require("./helpers");
const utils = require("../utils");

router.get("/genres", (req, res) => {
  Genre.find({}).exec((err, genres) => {
    if (err) {
      res.send({ message: "Genres fetching failed." });
    } else {
      const host = `${req.protocol}://${req.get("host")}`;

      res.send(
        genres.map(genreItem => {
          genreItem.img = utils.getAbsolutePath(host, genreItem.img);
          return genreItem;
        })
      );
    }
  });
});

router.get("/genre/:id", (req, res) => {
  helpers.getPlaylist({req, res, findBy: 'genre'});
});

module.exports = router;
