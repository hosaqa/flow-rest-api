const utils = require("../utils");
const Track = require("../models/Track");

const getPlaylist = ({ req, res, findBy }) => {
  Track.find({ [findBy]: req.params.id })
    .populate("artist")
    .populate("genre")
    .exec((err, playlist) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${utils.capitalize(findBy)} not found.` });
      } else {
        const host = `${req.protocol}://${req.get("host")}`;

        res.send({
          uri: `${findBy}:${req.params.id}`,
          title: playlist[0][findBy].name,
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
};

module.exports = {
  getPlaylist
};
