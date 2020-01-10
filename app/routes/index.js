const express = require("express");
const mainRouter = express.Router();
const artists = require("./artists");
const genres = require("./genres");

mainRouter.use(artists);
mainRouter.use(genres);

module.exports = mainRouter;
