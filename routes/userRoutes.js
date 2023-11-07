const express = require("express");
const router = express.Router();

const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
