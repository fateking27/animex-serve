const express = require("express");
const router = express.Router();
const favController = require('../controllers/favController')

router
  .post("/addfav", favController.addfav)
  .get("/favlist", favController.favlist)
  .delete("/delfav", favController.delfav)


module.exports = router;
