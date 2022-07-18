const asyncHandler = require("express-async-handler");
const recipe = require("../models/recipeModel");

const getRecipes = asyncHandler(async (req, res) => {
  const limit = req.query.limit || 10;
  const skip = parseInt(req.query.skip || 0);
  const findString = req.query.id.replace(/,/g, "|");
  const recipes = await recipe
    .aggregate([
      // add a weight parameter based of number of ingredients matching searched ingredient
      {
        $addFields: {
          weight: {
            $size: {
              $filter: {
                input: "$ingredients",
                as: "element",
                cond: {
                  $regexMatch: {
                    input: "$$element",
                    regex: RegExp(`\\b${findString}\\b`, "i"),
                  },
                },
              },
            },
          },
        },
      },
    ])
    .sort({ weight: -1, _id: -1 })
    .skip(skip)
    .limit(limit);
  res.status(200).json(recipes);
});

module.exports = {
  getRecipes,
};
