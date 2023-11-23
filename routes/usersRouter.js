const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  deleteUser,
} = require("../controllers/usersController");

const router = express.Router();

router.get("/", getUsers);
router.get("/user/:userId", getUser);
router.post("/", addUser);
router.delete("/user/:userId", deleteUser);

module.exports = router;
