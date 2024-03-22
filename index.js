require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const mealPlanningRoutes = require('./Routes/mealPlanning');
const educationRoutes = require('./Routes/education');
const AuthRoutes = require('./Routes/auth');
const ChallengeRoutes = require('./Routes/Challenges');
const FeedbackRoutes = require('./Routes/feedback');

app.use('/api', mealPlanningRoutes);
app.use('/api', educationRoutes);
app.use('/api', ChallengeRoutes);
app.use('/api', FeedbackRoutes);
app.use('/auth', AuthRoutes);
app.get("/", (req, res) => {
    res.json({
      message: "Backend API is Working!!!🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
