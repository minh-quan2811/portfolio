// Contact service - handles form validation and submission
import { portfolioAPI } from './api';

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Valid email is required';
  }

  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'Message is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const contactService = {
  // Send contact form
  submitContactForm: async (formData) => {
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      throw new Error(JSON.stringify(validation.errors));
    }

    try {
      const response = await portfolioAPI.sendContact(formData);
      return {
        success: true,
        message: 'Message sent successfully!',
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: error.message,
      };
    }
  },

  // Generate mailto link
  generateMailto: (email, subject = '', body = '') => {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  },

  // Share on social media
  shareOnSocial: (platform, config) => {
    const { url, title, text } = config;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text || title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      github: `https://github.com/dangminhquan`, // Direct link since GitHub doesn't have share intent
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  },
};

export default contactService;
