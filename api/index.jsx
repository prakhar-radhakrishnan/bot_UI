const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// CORS Configuration
app.use(cors({
  origin: 'https://bot-px.vercel.app', // Replace with your frontend URL
  methods: 'POST', // Allow only POST requests
  allowedHeaders: ['Content-Type'], // Allow only specific headers
}));

// Echo endpoint
app.post('/echo', (req, res) => {
  const userMessage = req.body.message;
  // Respond back with the user's message
  res.json({ response: `You said: ${userMessage}` });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
