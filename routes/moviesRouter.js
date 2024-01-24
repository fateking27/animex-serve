const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/moviesController");
router
  .get("/getMovieList", moviesController.getMovieList)
  .get("/getMovieById", moviesController.getMovieById)
  .delete("/delMovieById", moviesController.delMovieById)
  .get("/getMovieBycateId", moviesController.getMovieBycateId)
  .get("/getByMovieName", moviesController.getByMovieName)
  .post("/fileUpload", moviesController.fileUpload)

module.exports = router;
