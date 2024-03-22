const express = require('express');
const router = express.Router();
const UserChallenge = require('../models/Challenge');
const Challenge = require('../models/Challenge');
const Progress = require('../models/Challenge');

router.post('/challenges', async (req, res) => {
    try {
      const { title, description, durationDays, reward } = req.body;
      const challenge = new Challenge({ title, description, durationDays, reward });
      await challenge.save();
      res.status(201).json(challenge);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

  router.post('/join-challenge', async (req, res) => {
    try {
      const { userId, challengeId } = req.body;
      const startDate = new Date();
      const challengeDuration = (await Challenge.findById(challengeId)).durationDays;
      const endDate = new Date(startDate.getTime() + challengeDuration * 24 * 60 * 60 * 1000);
  
      const userChallenge = new UserChallenge({
        userId,
        challengeId,
        startDate,
        endDate,
        completed: false,
      });
  
      await userChallenge.save();
      res.status(201).json(userChallenge);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  router.post('/track-progress', async (req, res) => {
    try {
      const { userId, date, weight, energyLevel, otherHealthMarkers } = req.body;
      const progress = new Progress({
        userId,
        date: new Date(date),
        weight,
        energyLevel,
        otherHealthMarkers,
      });
  
      await progress.save();
      res.status(201).json(progress);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;