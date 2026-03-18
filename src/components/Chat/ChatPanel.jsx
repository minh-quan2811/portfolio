// Chat panel component - Den Den Mushi interface
import React from 'react';
import PanelLabel from '../Common/PanelLabel';
import ChatInput from './ChatInput';
import ContactGrid from './ContactGrid';
import useChat from '../../hooks/useChat';
import '../../styles/chat.css';

const ChatPanel = () => {
  const { messages, isLoading, error, sendMessage } = useChat();

  const suggestedQuestions = [
    'What are your strengths?',
    'What have you built?',
    'Are you open to work?',
    "What's your thesis about?",
  ];

  const handleQuestionClick = (question) => {
    sendMessage(question);
  };

  const handleSendMessage = (message) => {
    sendMessage(message);
  };

  const handleContactClick = (contact) => {
    console.log('Contact clicked:', contact);
    // Handle contact interactions here
  };

  return (
    <div className="panel-chat" id="contact">
      <PanelLabel jpText="連絡">DEN DEN MUSHI</PanelLabel>

      {/* Thought bubble intro */}
      <div className="thought-bubble">
        <div className="thought-text">
          I'm an AI trained on Quan's entire background.
          <br />
          Ask me anything — skills, projects, availability, how he thinks.
        </div>
      </div>

      {/* Spacing */}
      <div style={{ height: '1.5rem' }}></div>

      {/* Chat chips with suggested questions */}
      <div className="chat-chips">
        {suggestedQuestions.map((question, index) => (
          <span
            key={index}
            className="chip"
            onClick={() => handleQuestionClick(question)}
            role="button"
            tabIndex={0}
          >
            {question}
          </span>
        ))}
      </div>

      {/* Error message display */}
      {error && (
        <div className="chat-error">
          <p>{error}</p>
        </div>
      )}

      {/* Messages display area */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role}`}>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <ChatInput onSend={handleSendMessage} isLoading={isLoading} />

      {/* Contact cards */}
      <ContactGrid onContactClick={handleContactClick} />

      {/* Call to action */}
      <div className="contact-cta">
        <div>
          <div className="cta-text">GOT A MISSION? LET'S SET SAIL.</div>
          <div className="cta-jp">一緒に冒険しましょう</div>
        </div>
        <div className="cta-arrow">SEND IT</div>
      </div>
    </div>
  );
};

export default ChatPanel;
