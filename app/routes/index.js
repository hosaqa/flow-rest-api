const express = require("express");
const mainRouter = express.Router();
const tracks = require("./tracks");
const artists = require("./artists");
const genres = require("./genres");

mainRouter.use(tracks);
mainRouter.use(artists);
mainRouter.use(genres);

module.exports = mainRouter;
