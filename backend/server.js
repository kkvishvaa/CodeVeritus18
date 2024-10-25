const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ncode', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  role: { type: String, required: true }, // 'user' or 'admin'
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// User Code Schema (with userId included)
const UserCodeSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // Unique identifier for the user
  codes: [String],  // Array of codes for the user
  submittedAt: { type: Date, default: Date.now },
  processed: { type: Boolean, default: false },
  processedAt: { type: Date, default: null },
});

const UserCode = mongoose.model('UserCode', UserCodeSchema);

// API: Submit or update user codes
app.post('/api/backend', async (req, res) => {
  try {
    const { userId, codes } = req.body;

    // Update or insert user codes by userId
    const updatedUserCode = await UserCode.updateOne(
      { userId },
      {
        $set: {
          codes,
          submittedAt: new Date(),
          processed: false,
          processedAt: null,
        },
      },
      { upsert: true }
    );

    res.status(201).json({ message: 'User codes saved successfully!' });
  } catch (error) {
    console.error('Error saving user codes:', error);
    res.status(500).json({ message: 'Error saving user codes' });
  }
});

// API: Get all submitted user codes
app.get('/api/backend', async (req, res) => {
  try {
    const userCodes = await UserCode.find(); // Fetch all user codes
    res.json(userCodes);
  } catch (error) {
    console.error('Error fetching user codes:', error);
    res.status(500).json({ message: 'Error fetching user codes' });
  }
});

// API: User Signup
app.post('/api/signup', async (req, res) => {
  const { role, username, email, password } = req.body;

  try {
    // Check if username or email exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password and save new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ role, username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: `${role} registered successfully` });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API: User Login
app.post('/api/login', async (req, res) => {
  const { role, username, password } = req.body;

  try {
    // Find user by username and role
    const user = await User.findOne({ username, role });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: `${role} login successful` });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server (only one call to app.listen)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
