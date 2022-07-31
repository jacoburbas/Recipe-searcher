const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  ingredients: {
    type: Array,
    required: [true, "Please add ingredients"],
  },
});

module.exports = mongoose.model("recipe", RecipeSchema);
