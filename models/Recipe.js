const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [{ name: String, quantity: String }],
  dietaryRestrictions: [String],
  preparationTime: Number,
  cost: Number,
  nutritionalInformation: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
  },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
