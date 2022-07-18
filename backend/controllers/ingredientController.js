const asyncHandler = require("express-async-handler");
const ingredient = require("../models/ingredientModel");

const getIngredients = asyncHandler(async (req, res) => {
  // const limit = req.query.limit || 20;
  const like = req.params.id === ":id" ? "" : req.params.id;

  const ingredients = await ingredient.find({ name: { $regex: like } });
  // .limit(limit);
  res.status(200).json(ingredients);
});

module.exports = {
  getIngredients,
};
