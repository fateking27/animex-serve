const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router
  .post("/register", userController.register)
  .post("/login", userController.login)
  .get("/getuser", userController.getuser)
  .put("/edituser", userController.edituser);

module.exports = router;
