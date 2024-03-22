const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const MealPlan = require('../models/MealPlan');

// Fetch recipes based on dietary restrictions
router.get('/recipes', async (req, res) => {
  try {
    const { dietaryRestrictions } = req.query;
    const query = dietaryRestrictions ? { dietaryRestrictions: { $in: [dietaryRestrictions] } } : {};
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Add a meal plan
router.post('/mealplan', async (req, res) => {
  try {
    const mealPlan = new MealPlan(req.body);
    await mealPlan.save();
    res.status(201).send('Meal plan created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
