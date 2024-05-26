// Chatbot.jsx
/*import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from 'axios'; 
import './Chatbot.css'; 

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('http://localhost:8000/api/chat', { question: input });
      setMessages([...newMessages, { sender: 'bot', text: response.data }]);
    } catch (error) {
      console.error('Error communicating with chatbot:', error);
    }
  };

  return (
    <Box className="chatbot-container">
      <Box className="chatbot-messages">
        {messages.map((msg, index) => (
          <Box key={index} className={`chatbot-message ${msg.sender}`}>
            <Typography variant="body1" className="chatbot-message-text">
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className="chatbot-input-container">
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" color="primary" onClick={handleSend} className="chatbot-send-button">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;*/



import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:8000/api/chat', { prompt: userInput });
      setChatHistory([...chatHistory, { type: 'user', text: userInput }, { type: 'bot', text: response.data.response }]);
      setUserInput('');
    } catch (error) {
      console.error('Error communicating with chatbot:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-body">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.type}`}>
            {chat.text}
          </div>
        ))}
      </div>
      <div className="chatbot-footer">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
