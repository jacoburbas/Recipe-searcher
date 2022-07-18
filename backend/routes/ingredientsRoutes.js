const express = require("express");
const router = express.Router();
const { getIngredients } = require("../controllers/ingredientController");

router.route("/:id").get(getIngredients);

module.exports = router;
