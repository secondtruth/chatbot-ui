import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);

  const addMessageToChat = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatContext.Provider value={{ chatMessages, addMessageToChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
