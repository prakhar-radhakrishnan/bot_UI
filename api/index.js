const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // To allow requests from your React app
app.use(express.json()); // To parse JSON bodies

// Echo endpoint
app.post('/echo', (req, res) => {
  const userMessage = req.body.message;
  // Respond back with the user's message
  res.json({ response: `${userMessage}` });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
