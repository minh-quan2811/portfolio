// Chat input component for the chat interface
import React, { useState } from 'react';
import '../../styles/chat.css';

const ChatInput = ({ onSend, isLoading = false, placeholder = "Ask your question, navigator..." }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input-row" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="chat-btn"
        disabled={isLoading || !inputValue.trim()}
      >
        {isLoading ? '...' : 'SEND IT'}
      </button>
    </form>
  );
};

export default ChatInput;
