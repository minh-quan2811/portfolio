// Custom hook for chat functionality
import { useState, useCallback } from 'react';
import { portfolioAPI } from '../services/api';

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "I'm an AI trained on Quan's entire background. Ask me anything — skills, projects, availability, how he thinks.",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (userMessage) => {
    if (!userMessage.trim()) return;

    // Add user message to chat
    const userMsg = {
      id: messages.length + 1,
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await portfolioAPI.sendChatMessage(userMessage);

      const assistantMsg = {
        id: messages.length + 2,
        role: 'assistant',
        content: response.message || response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setError(err.message || 'Failed to send message');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [messages.length]);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 1,
        role: 'assistant',
        content: "I'm an AI trained on Quan's entire background. Ask me anything — skills, projects, availability, how he thinks.",
        timestamp: new Date(),
      },
    ]);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
};

export default useChat;
