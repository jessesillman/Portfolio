require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// MongoDB connection string
// Replace 'mongodb://localhost:27017/contactDB' with your actual MongoDB URI if needed
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for submitting contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).send('Contact information saved successfully.');
  } catch (error) {
    console.error('Error saving contact information:', error);
    res.status(500).send('Error saving contact information.');
  }
});

// Simple GET route for the root URL to check if the server is running
app.get('/', (req, res) => {
    res.send('Server is running.');
  });
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
