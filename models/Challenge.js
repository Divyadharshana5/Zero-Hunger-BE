const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  durationDays: Number,
  reward: String,
});

const userChallengeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },
  startDate: Date,
  endDate: Date,
  completed: { type: Boolean, default: false },
});

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  weight: Number,
  energyLevel: Number,
  otherHealthMarkers: Map,
});

module.exports = mongoose.model('Challenge', challengeSchema);
module.exports = mongoose.model('UserChallenge', userChallengeSchema);
module.exports = mongoose.model('Progress', progressSchema);
