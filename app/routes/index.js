const express = require("express");
const mainRouter = express.Router();
const tracks = require("./tracks");

mainRouter.use(tracks);

module.exports = mainRouter;
