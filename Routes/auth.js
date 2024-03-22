const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    try {
      const { email, password, age, weight, height, dietaryRestrictions, healthGoals, medicalConditions, activityLevel, culturalFoodPreferences, economicConstraints } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        password: hashedPassword,
        age,
        weight,
        height,
        dietaryRestrictions,
        healthGoals,
        medicalConditions,
        activityLevel,
        culturalFoodPreferences,
        economicConstraints,
      });
      await user.save();
      res.status(201).send('User created');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).send('Invalid login credentials');
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  module.exports = router;
