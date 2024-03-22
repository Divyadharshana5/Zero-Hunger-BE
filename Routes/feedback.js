const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/feedback', async (req, res) => {
    const { userId, content } = req.body;
    try {
      const feedback = new Feedback({
        userId,
        content
      });
      await feedback.save();
      res.status(201).json({ message: "Feedback submitted successfully." });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  module.exports= router;