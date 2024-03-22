const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const QuizSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  questions: [{
    questionText: String,
    options: [String],
    correctAnswer: Number, // index of the correct answer in options
  }],
});

const Lesson = mongoose.model('Lesson', LessonSchema);
const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = { Lesson, Quiz };
