import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';  // Import the CSS file

const BotUI = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Function to format time to hh:mm AM/PM
    const formatTime = (date) => {
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}:${formattedMinutes} ${ampm}`;
    };

    // Get the current time
    const timestamp = formatTime(new Date());

    // Add the user's message to the message array with the timestamp
    const newMessages = [
      ...messages,
      { text: message, sender: 'user', time: timestamp }
    ];

    setMessages(newMessages);
    setMessage('');

    try {
      // Send the message to the backend
      const res = await axios.post('https://bot-pxapi.vercel.app/echo', { message });

      // Add the bot's response to the message array with the timestamp
      setMessages([...newMessages, { text: res.data.response, sender: 'bot', time: formatTime(new Date()) }]);
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="container">
      <h1>Chat with Bot</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
            <span className="timestamp">{msg.time}</span>
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BotUI;
