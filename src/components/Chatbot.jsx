import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const chatbotResponses = {
  "what is your name": "My name is Sujin Pongchababnapa",
  "where do you study": "I study at the University of Bath.",
  "what do you study": "I am studying Computer Science.",
  "what are your skills": "I have experience with React, Python, Reinforcement Learning, and more.",
  "tell me about your projects": "I’ve worked on AI-based irrigation systems, DQN for Atari games, and more.",
};

const predefinedQuestions = [
  "What is your name",
  "Where do you study",
  "What do you study",
  "What are your skills",
  "Tell me about your projects"
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);

  const handleSelect = (question) => {
    const answer = chatbotResponses[question.toLowerCase()] || "Sorry, I don't understand that question.";
    setChat([...chat, { type: 'user', text: question }, { type: 'bot', text: answer }]);
  };

  return (
    <>
      {/* Floating Robot Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition"
        aria-label="Open chatbot"
      >
        <span role="img" aria-label="robot">🤖</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 w-80 bg-white text-black rounded-lg shadow-lg p-4 z-50">
          <div className="h-60 overflow-y-auto mb-4 border-b border-gray-300 pb-2">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 text-sm ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span className={`inline-block px-2 py-1 rounded ${msg.type === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            {predefinedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSelect(q)}
                className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
