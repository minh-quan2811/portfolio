// API client service - centralized API calls and configuration
// This service handles all backend communication

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Helper function for API requests
export const apiClient = async (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    headers = {},
  } = options;

  try {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Client Error:', error);
    throw error;
  }
};

// Portfolio-specific API calls
export const portfolioAPI = {
  // Get portfolio data
  getPortfolio: async () => {
    try {
      return await apiClient('/portfolio');
    } catch (error) {
      console.error('Failed to fetch portfolio:', error);
      return null;
    }
  },

  // Get projects
  getProjects: async () => {
    try {
      return await apiClient('/projects');
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      return [];
    }
  },

  // Get skills
  getSkills: async () => {
    try {
      return await apiClient('/skills');
    } catch (error) {
      console.error('Failed to fetch skills:', error);
      return [];
    }
  },

  // Send contact form
  sendContact: async (contactData) => {
    try {
      return await apiClient('/contact', {
        method: 'POST',
        body: contactData,
      });
    } catch (error) {
      console.error('Failed to send contact:', error);
      throw error;
    }
  },

  // Chat with AI (if implementing chatbot)
  sendChatMessage: async (message) => {
    try {
      return await apiClient('/chat', {
        method: 'POST',
        body: { message },
      });
    } catch (error) {
      console.error('Failed to send chat message:', error);
      throw error;
    }
  },
};

export default apiClient;
