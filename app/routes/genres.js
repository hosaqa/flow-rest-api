const express = require("express");
const router = express.Router();
const Genre = require("../models/Genre");
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

module.exports = router;
