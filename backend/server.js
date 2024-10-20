// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/rcode', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Sample Schema for User Codes
const UserCodeSchema = new mongoose.Schema({
  codes: [String], // Array of codes for multiple users
  submittedAt: { type: Date, default: Date.now }, // Timestamp for submission
});

const UserCode = mongoose.model('UserCode', UserCodeSchema);

// API endpoint to submit user codes
app.post('/api/user-codes', async (req, res) => {
  try {
    const { codes } = req.body;
    
    const newUserCodes = new UserCode({ codes });
    await newUserCodes.save();
    res.status(201).json({ message: 'User codes saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user codes' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// API endpoint to get all submitted user codes
app.get('/api/user-codes', async (req, res) => {
  try {
    const userCodes = await UserCode.find(); // Fetch all user codes
    res.json(userCodes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user codes' });
  }
});
