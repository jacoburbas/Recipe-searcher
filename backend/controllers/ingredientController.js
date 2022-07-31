const asyncHandler = require("express-async-handler");
const ingredient = require("../models/ingredientModel");

const getIngredients = asyncHandler(async (req, res) => {
  const like = req.query.name ? req.query.name : "";

  const ingredients = await ingredient.find({
    name: { $regex: like, $options: "i" },
  });

  res.status(200).json(ingredients);
});

module.exports = {
  getIngredients,
};
