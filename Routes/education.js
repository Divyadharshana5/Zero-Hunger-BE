const express = require('express');
const router = express.Router();
const { Lesson, Quiz } = require('../models/Education');

// Fetch lessons
router.get('/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    res.json(lessons);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Fetch quizzes for a lesson
router.get('/quizzes/:lessonId', async (req, res) => {
  try {
    const { lessonId } = req.params;
    const quizzes = await Quiz.find({ lessonId });
    res.json(quizzes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
