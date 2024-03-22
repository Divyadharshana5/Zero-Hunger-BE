const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: Number,
    weight: Number,
    height: Number,
    dietaryRestrictions: [String],
    healthGoals: String,
    medicalConditions: [String],
    activityLevel: String,
    culturalFoodPreferences: [String],
    economicConstraints: Boolean,
  });
  
  module.exports = mongoose.model('User', UserSchema);
  