const express = require("express");
const mainRouter = express.Router();
const tracks = require("./tracks");
const artists = require("./artists");

mainRouter.use(tracks);
mainRouter.use(artists);

module.exports = mainRouter;
