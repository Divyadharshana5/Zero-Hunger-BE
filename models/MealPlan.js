const mongoose = require('mongoose');

const MealPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: Date,
  endDate: Date,
  meals: [{
    date: Date,
    mealType: String, // e.g., breakfast, lunch, dinner
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
  }],
});

module.exports = mongoose.model('MealPlan', MealPlanSchema);
