import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';  // Import the CSS file

const BotUI = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the message to the backend
      const res = await axios.post('https://bot-ui-api.vercel.app/echo', { message });


      // Update the response state with the reply from the backend
      setResponse(res.data.response);
    } catch (error) {
      // Log any error that occurs
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="container">
      <h1>Chat with Bot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">
          Send
        </button>
      </form>
      {response && <p>Bot: {response}</p>}
    </div>
  );
};

export default BotUI;
