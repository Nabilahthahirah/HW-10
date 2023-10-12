const express = require("express");
const router = express.Router();
const movieRouter = require("./movie.js");
const userRouter = require("./user.js");

router.use("/movies", movieRouter)
router.use("/users", userRouter)

module.exports = router;