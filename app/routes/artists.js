const express = require("express");
const router = express.Router();
const Artist = require("../models/Artist");

router.get("/artists", (req, res) => {
  Artist.find({}).exec((err, artists) => {
    if (err) {
      res.send({ message: "An error has occurred" });
    } else {
      res.send(artists);
    }
  });
});

module.exports = router;
