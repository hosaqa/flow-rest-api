const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
const Track = require("../models/Track");
const Artist = require("../models/Artist");

// router.get("/tracks", (req, res) => {
//   Track.collection.find().toArray((err, data) => {
//     res.send(data);
//   });
// });

router.get("/tracks", (req, res) => {
  const artist_ID = req.query.artist_ID;

  const details = {
    artist: new ObjectID(artist_ID)
  };

  Track.collection.find(details).toArray((err, item) => {
    if (err) {
      res.send({ error: "An error has occurred" });
    } else {
      res.send(item);
    }
  });
});

module.exports = router;

// module.exports = function(app, db) {
//   app.get("/tracks", (req, res) => {
//     Track.collection.find().toArray((err, data) => {
//       res.send(data);
//     });
//   });

//   app.get("/tracks/:id", (req, res) => {
//     const id = req.params.id;
//     const details = {
//       _id: new ObjectID(id)
//     };

//     db.collection("artists").findOne(details, (err, item) => {
//       if (err) {
//         res.send({ error: "An error has occurred" });
//       } else {
//         res.send(item);
//       }
//     });
//   });
// };
