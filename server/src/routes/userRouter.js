const userService = require("../services/userServices");

const express = require("express"),
  router = express.Router();


router.get("/",  async (req, res) => {
  console.log("object created")
  const cars = await userService.getAllUsers();
  res.json(cars);
});
router.get("/:id",  async (req, res) => {
  const car = await userService.getUserById(req.params.id);
  res.json(car);
});

router.post("/", async (req, res) => {
  console.log(req.body)
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
 });

router.delete("/:id", async (req, res) => { });

module.exports = router;