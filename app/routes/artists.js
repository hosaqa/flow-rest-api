const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
const Track = require("../models/Track");
const Artist = require("../models/Artist");

router.get("/artists", (req, res) => {
  Artist.collection.find({}).toArray((err, artists) => {
    if (err) {
      res.send({ message: "An error has occurred" });
    } else {
      res.send(playlist);
    }
  });
});

// router.get("/artists/:id", (req, res) => {
//   const artistID = req.params.id;
  
//   const details = {
//     artist: new ObjectID(artistID)
//   }

//   Track.collection.find(details).populate("artist").toArray((err, playlist) => {
//     if (err) {
//       res.send({ message: "An error has occurred" });
//     } else {
//       res.send({
//         name: artistID,
//         playlist
//       });
//     }
//   });
// });

module.exports = router;