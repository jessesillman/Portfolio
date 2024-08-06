require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const mongoURI = process.env.MONGODB_URI;

console.log(`Connecting to MongoDB at URI: ${process.env.MONGODB_URI}`);
mongoose.connect(mongoURI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact information saved successfully.' });
  } catch (error) {
    console.error('Error saving contact information:', error);
    res.status(500).json({ error: 'Error saving contact information.' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
